import { Component } from '@angular/core';
import { Picture } from 'src/app/model/picture.model';
import { BookService } from 'src/app/services/book.service';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  files: File[] = [];
  addedId: number = 0;
  line: string = "";

  constructor(private bookService: BookService, private picService: PictureService){}

  addBook(book: any): void{
    console.log(book);
    this.bookService.addBook(book).subscribe({
      next: (response)=> { 
        this.addedId = response.id;
        console.log(this.addedId);
        for(let i=0; i < this.files.length; i++){
          let reader = new FileReader();
          reader.readAsDataURL(this.files[i]);
          reader.onload = (event) => {
            this.line = reader.result != null ?  (reader.result).toString() : "" ;
            let parts = this.line.split(",");
            let picture = new Picture(this.addedId, parts[1]);
            console.log(picture);
            this.picService.addPicture(picture).subscribe({
              next: (data)=> { console.log(data); },
              error: (error)=> { console.log(error); },
              complete: ()=> { console.log("Picture completed!"); },
            })
          } 
        }
        },
      error: (error)=> { console.log(error); },
      complete: ()=> { console.log("Completed!");},
    });
  }

  selectFiles(event: any): void{
    this.files = event.target.files;
    console.log(this.files);
  }
}

import { Component } from '@angular/core';
import { Picture } from 'src/app/model/picture.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  files: File[] = [];
  addedId: number = 0;

  constructor(private bookService: BookService) {

  }

  addBook(book: any): void{
    console.log(book);
    this.bookService.addBook(book).subscribe({
      next: (response) => {
        this.addedId = response.id;
        console.log(this.addedId);
        for(let i = 0; i < this.files.length; i++) {
          let reader = new FileReader();
          reader.readAsDataURL(this.files[i]);
          reader.onload = (event) => {
            let picture = new Picture(0, this.addedId, reader.result);
            console.log(picture);
          }
        }

      },
      error: (error) => {console.log(error)},
      complete: () => {console.log("completed")},
    });
  }

  selectFiles(event: any): void {
    this.files = event.target.files;
    console.log(this.files);
  }
}

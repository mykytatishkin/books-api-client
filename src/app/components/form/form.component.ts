import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  files: File[] = [];

  constructor(private bookService: BookService) {

  }

  addBook(book: any): void{
    console.log(book);
    this.bookService.addBook(book).subscribe({
      next: (response) => {console.log(response)},
      error: (error) => {console.log(error)},
      complete: () => {console.log("completed")},
    });
  }

  selectFiles(event: any): void {
    this.files = event.target.files;
    console.log(this.files);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  files: File[] = [];

  addBook(book: any): void{
    console.log(book);
  }

  selectFiles(event: any): void {
    this.files = event.target.files;
    console.log(this.files);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books-api-client';
  bookId: number = 0;

  getBookId(event: number): void {
    this.bookId = event;
    console.log("BookId="+this.bookId);
  }
}

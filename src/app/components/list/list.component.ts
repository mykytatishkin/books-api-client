import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/services/book.service';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: number = 0;
  @Output() emitBookId: EventEmitter<number> = new EventEmitter<number>();

  constructor(private bookService: BookService, private picService: PictureService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (response) => { this.books = response; console.log(response); },
      error: (error) => { console.log(error); },
      complete: () => { console.log("ngOnInit() List.Component.ts done"); }
    });
  }

  selectBook(id: number): void {
    this.selectedBook = id;
    console.log(this.selectedBook);
    this.emitBookId.emit(this.selectedBook);
  }
}

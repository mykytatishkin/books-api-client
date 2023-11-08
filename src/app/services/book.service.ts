import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url: string = "http://localhost:5221/api/books";

  constructor(private httpClient: HttpClient) { }


  /*
  * Creates request on method HttpGet, by link
  * In return it will bring response with Observable 
  */
  getBooks(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  getBookById(id: number): Observable<any>{
    return this.httpClient.get(this.url + "/" + id)
  }

  addBook(book: Book): Observable<any> {
    const headers = {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization,Accept, Accept-Encoding',
      'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    };
    return this.httpClient.post(this.url, book, {headers});
  }
}

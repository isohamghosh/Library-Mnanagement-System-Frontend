import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookResponse } from './book-response';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  books: BookResponse;
  constructor(private http: HttpClient) { }

  getData() {
    this.http.get<BookResponse>(`http://localhost:8080/librarian/searchBooks`).subscribe(data => {
        this.books = data;
        console.log(this.books);
      });
  }
  getBook(book) {
    this.http.get<BookResponse>(`http://localhost:8080/student/searchBook/${book}`).subscribe(data => {
        this.books = data;
        console.log(this.books);
      });
  }
}

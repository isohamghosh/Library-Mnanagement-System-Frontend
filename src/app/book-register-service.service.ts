import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { RequestedBookResponse } from './requested-book-response';

@Injectable({
  providedIn: 'root'
})
export class BookRegisterServiceService {

  constructor(private http: HttpClient,
              private service: AuthService) { }
    books: RequestedBookResponse;
  getData() {
    if (this.service.isStudentLoggedIn()) {
      this.http.get<RequestedBookResponse>(`http://localhost:8080/student/getAllRequestedBook`).subscribe(data => {
        this.books = data;
        console.log(this.books);
      });
    } else if (this.service.isLibrarianLoggedIn()) {
      this.http.get<RequestedBookResponse>(`http://localhost:8080/librarian/getAllBookRequest`).subscribe(data => {
        this.books = data;
        console.log(this.books);
      });
    }
  }
}

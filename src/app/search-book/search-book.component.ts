import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookServiceService } from '../book-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  constructor(private bookService: BookServiceService,
              private http: HttpClient,
              private router: Router,
              private service: AuthService) {
    this.bookService.getData();
  }

  selectedBook = {
    bookId: null,
    bookName: null,
    firstAuthor: null,
    secondAuthor: null,
    publisher: null,
    yearOfPublication: null
  };

  selectBook(book) {
    console.log(book.bookId);
    this.selectedBook = book;
  }

  searchBook(book) {
    this.bookService.getBook(book);
  }

  updateBook(updateForm: NgForm) {
    console.log(updateForm.value);
    this.http.put('http://localhost:8080/librarian/updateBook', updateForm.value).subscribe(response => {
      updateForm.reset();
      if (response) {
        alert('Book Updated Successfully');
        this.bookService.getData();
      }
      this.router.navigate(['/searchBook']);
    });
  }

  get isLLoggedIn() {
    return this.service.isLibrarianLoggedIn();
  }

  get isSLoggedIn() {
    return this.service.isStudentLoggedIn();
  }

  deleteBook(book) {
    this.http.delete(`http://localhost:8080/librarian/deleteBook/${book.bookId}`).subscribe(resData => {
      console.log(resData);
      this.bookService.getData();
    }, err => {
      console.log(err);
    });
  }

  requestBook(book) {
    this.http.get(`http://localhost:8080/student/makeBookRequest/${book.bookId}`).subscribe(response => {
      if (response) {
        alert('Registration Success');
      }
    });
  }

  ngOnInit() {
  }

}

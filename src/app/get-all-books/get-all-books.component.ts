import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.css']
})
export class GetAllBooksComponent implements OnInit {

  constructor(private BookService: BookService) {
    this.BookService.getData();
  }

  ngOnInit() {
  }

  selectedBook = {
    bookId: null,
    bookName: null,
    author1: null,
    author2: null,
    publisher: null,
    yearOfPublication: null,
  }



  //view data in form
  selectBook(book) {
    this.selectedBook = book;
  }

  //call getData() to access api and send data to it
  callGetData() {
    this.BookService.getData();
  }

  //update employee detail and then view it in the form page and correlate with putData() of employee.service.ts
  updateCustomer(updateBookForm: NgForm) {
    this.BookService.putData(updateBookForm.value).subscribe(resData => {
      console.log(resData);
      updateBookForm.reset();
    }, err => {
      console.log();

    });
  }

  deleteBook(book) {
    this.BookService.deleteData(book).subscribe(resData => {
      console.log(resData);
      this.BookService.getData();
    }, err => {
      console.log(err);

    })
  }


}

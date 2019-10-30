import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  constructor(private http: HttpClient,
              private service: AuthService) { }

  ngOnInit() {
  }

  onRegister(registerForm: NgForm) {
      console.log(registerForm.value);
      this.http.post('http://localhost:8080/librarian/addNewBook', registerForm.value).subscribe(response => {
        registerForm.reset();
        if (response) {
          alert('Book Added');
        }
      }, err => {
        alert('Book not added please check details');
      });
  }

}

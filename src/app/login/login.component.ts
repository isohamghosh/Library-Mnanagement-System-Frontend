import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginResponse } from '../login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    this.http.post<LoginResponse>(`http://localhost:8080/user/login`, loginForm)
      .subscribe(response => {
        if (response != null && response.role === 'Admin') {
          console.log(response);
          alert('Admin Logged Successfull Welcome ' + response.name);
          this.service.isALoggedIn = true;
          this.router.navigate(['/']);
        } else if (response != null && response.role === 'Librarian') {
          console.log(response);
          alert('Librarian Logged Successfull Welcome ' + response.name);
          this.service.isLLoggedIn = true;
          this.router.navigate(['/requestedBook']);
        } else if (response != null && response.role === 'Student') {
          console.log(response);
          alert('Student Logged Successfull Welcome ' + response.name);
          this.service.isSLoggedIn = true;
          this.router.navigate(['/searchBook']);
        } else {
          console.log(response);
          alert('Credentials invalid');
        }
      });
  }
}



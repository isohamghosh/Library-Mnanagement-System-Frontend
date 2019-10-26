import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = [];
  constructor(private router: Router, private http: HttpClient, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    this.http.post<any>(`http://localhost:8080/login`, loginForm.value).subscribe(data => {
      console.log(data.user.type);
      this.users = data.user;
      if (data.user.type === 'owner') {
        alert('Login successfull');
        this.loginService.isLibrarianLoggedIn = true;
        this.router.navigateByUrl('/');
      } else if (data.user.type === 'user') {
        alert('Login successfull');
        this.loginService.isStudentLoggedIn = true;
        this.router.navigateByUrl('/');
      } else if (data.user.type === 'admin') {
        alert('Login successfull');
        this.loginService.isAdminLoggedIn = true;
        this.router.navigateByUrl('/');
      } else {
        alert('Invalid credential...! please enter valid credential');
        loginForm.reset();
      }
    });
  }
}



import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  admin: boolean;
  librarian: boolean;
  constructor(private http: HttpClient,
              private service: AuthService) {
  }

  ngOnInit() {
  }

  onRegister(registerForm: NgForm) {
    if (this.service.isAdminLoggedIn()) {
      console.log(registerForm.value);
      this.http.post('http://localhost:8080/admin/addLibrarian', registerForm.value).subscribe(response => {
        registerForm.reset();
        if (response) {
          alert('Librarian Register Successfully');
        }
      });
    } else if (this.service.isLibrarianLoggedIn()) {
      console.log(registerForm.value);
      this.http.post('http://localhost:8080/librarian/addStudent', registerForm.value).subscribe(response => {
        registerForm.reset();
        if (response) {
          alert('Student Register Successfully');
        }
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  constructor(private userService: UserServiceService,
              private http: HttpClient,
              private service: AuthService,
              private router: Router) {
    this.userService.getData();
  }
  selectedUser = {
    id: null,
    name: null,
    emailId: null,
    password: null
  };
  selectUser(user) {
    console.log(user.id);
    this.selectedUser = user;
  }
  updateUser(updateForm: NgForm) {
    if (this.service.isAdminLoggedIn()) {
      console.log(updateForm.value);
      this.http.put('http://localhost:8080/admin/updateLibrarian', updateForm.value).subscribe(response => {
        updateForm.reset();
        if (response) {
          alert('Librarian Updated Successfully');
          this.userService.getData();
        }
        this.router.navigate(['/searchUser']);
      });
    } else if (this.service.isLibrarianLoggedIn()) {
      console.log(updateForm.value);
      this.http.put('http://localhost:8080/librarian/updateStudent', updateForm.value).subscribe(response => {
        updateForm.reset();
        if (response) {
          alert('Librarian Updated Successfully');
          this.userService.getData();
        }
        this.router.navigate(['/searchUser']);
      });
    }
  }

  deleteUser(user) {
    if (this.service.isAdminLoggedIn()) {
      this.http.delete(`http://localhost:8080/admin/deleteLibrarian/${user.id}`).subscribe(resData => {
        console.log(resData);
        this.userService.getData();
      }, err => {
        console.log(err);
      });
    } else if (this.service.isLibrarianLoggedIn()) {
      this.http.delete(`http://localhost:8080/librarian/deleteStudent/${user.id}`).subscribe(resData => {
        console.log(resData);
        this.userService.getData();
      }, err => {
        console.log(err);
      });
    }
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { BookRegisterServiceService } from '../book-register-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-requested-book',
  templateUrl: './requested-book.component.html',
  styleUrls: ['./requested-book.component.css']
})
export class RequestedBookComponent implements OnInit {

  constructor(private bookRegisterService: BookRegisterServiceService,
              private http: HttpClient,
              private router: Router,
              private service: AuthService) {
  this.bookRegisterService.getData();
}
// selectedResponse = {
//   registrationId: null,
//   bookId: null,
//   userId: null,
//   registrationDate: null
// };

  ngOnInit() {
  }

  get isLLoggedIn() {
    return this.service.isLibrarianLoggedIn();
  }

  get isSLoggedIn() {
    return this.service.isStudentLoggedIn();
  }

  // selectBookResponse(respose) {
  //   console.log(respose.registrationId);
  //   this.selectedResponse = respose;
  // }

  acceptRequest(books) {
    this.http.get(`http://localhost:8080/librarian/responseBookRequest/${books.registrationId}`).subscribe(response => {
      if (response) {
        alert('Registration Accepted');
        this.bookRegisterService.getData();
      }
    });
  }

  cancelRequest(books) {
    if (this.service.isStudentLoggedIn()) {
      this.http.get(`http://localhost:8080/student/cancelRequest/${books.registrationId}`).subscribe(response => {
        if (response) {
          alert('Request Canceled');
          this.bookRegisterService.getData();
        }
      });
    } else if (this.service.isLibrarianLoggedIn()) {
      this.http.get(`http://localhost:8080/librarian/cancelBookRequest/${books.registrationId}`).subscribe(response => {
        if (response) {
          alert('Request Canceled');
          this.bookRegisterService.getData();
        }
      });
    }
  }
}

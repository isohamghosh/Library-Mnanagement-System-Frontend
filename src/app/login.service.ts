import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  isAdminLoggedIn = false;
  isLibrarianLoggedIn = false;
  isStudentLoggedIn = false;
  constructor(private http: HttpClient) { }

  isAdminLogin() {
    if (this.isAdminLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
  isOwnerLogin() {
    if (this.isLibrarianLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
    isCustomerLogin() {
      if (this.isStudentLoggedIn) {
        return true;
      } else {
        return false;
      }
    }
}


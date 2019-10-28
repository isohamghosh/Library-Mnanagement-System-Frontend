import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from './login-response';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users: LoginResponse;
  constructor(private http: HttpClient,
              private service: AuthService) { }

  getData() {
    if (this.service.isAdminLoggedIn()) {
      this.http.get<LoginResponse>(`http://localhost:8080/admin/searchLibrarian`).subscribe(data => {
        this.users = data;
        console.log(this.users);
      });
    } else if (this.service.isLibrarianLoggedIn()) {
      this.http.get<LoginResponse>(`http://localhost:8080/librarian/searchStudent`).subscribe(data => {
        this.users = data;
        console.log(this.users);
      });
    }
  }
}

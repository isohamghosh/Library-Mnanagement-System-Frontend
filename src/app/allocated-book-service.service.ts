import { Injectable } from '@angular/core';
import { AllocatedBookResponse } from './allocated-book-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllocatedBookServiceService {

  details: AllocatedBookResponse;

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get<AllocatedBookResponse>(`http://localhost:8080/student/getAllAllocatedBook`).subscribe(data => {
        this.details = data;
        console.log(this.details);
      });
  }
}

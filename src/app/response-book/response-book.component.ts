import { Component, OnInit } from '@angular/core';
import { AllocatedBookServiceService } from '../allocated-book-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-response-book',
  templateUrl: './response-book.component.html',
  styleUrls: ['./response-book.component.css']
})
export class ResponseBookComponent implements OnInit {

  constructor(private allocatedBookService: AllocatedBookServiceService,
              private http: HttpClient) {
                this.allocatedBookService.getData();
  }

  ngOnInit() {
  }
  returnBook(books) {
      this.http.get(`http://localhost:8080/student/returnBook/${books.transactionId}`).subscribe(response => {
          if (response > 0) {
            alert(`Your fine${response}`);
          }
        });
  }

}

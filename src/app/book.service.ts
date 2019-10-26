import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class BookService{

    constructor(private http:HttpClient) { }
    
   //in firebase data are stored in the form of json
  api='http://localhost:8080/';

  //temporary array
  books=[];

  //to access the http methods we have to use HttpClient
 
 
  

  //used to enter all the objects(key and value pair) in the api
  getData(){
    this.http.get(`${this.api}getAllBooks`).pipe(map(resData =>{
      let books=[];
      for(let key in resData){
        books.push({...resData[key],eid:key});
      }
      return books;
    })).subscribe(data=>{
      this.books=data;
      console.log(this.books);
    });
  }

  //used to display data in form page
  putData(book){
    return this.http.put(`${this.api}updateLogin/${book.id}`,book);
  }

  //delete data from the page page
  deleteData(book){
    return this.http.delete(`${this.api}deleteBook/${book.id}`);
  }
}
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.prod";
import {Observable} from "rxjs";
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private API_BOOK = environment.API_LOCAL;

  constructor(private http: HttpClient) {
  }
  getAllBook(): Observable<Book []>{
    return this.http.get<Book []>(this.API_BOOK);
  }
  findBookByID(id: number):Observable<Book>{
    return this.http.get<Book>(this.API_BOOK+`/${id}`);
  }
  createBook(book: Book): Observable<any>{
    return this.http.post(this.API_BOOK,book);
  }
  deleteBook(id: number): Observable<any>{
    return this.http.delete(this.API_BOOK + `/${id}`)
  }
  updateBook(id: number, book: Book): Observable<any>{
    return this.http.put(this.API_BOOK + `/${id}`,book);
  }



}

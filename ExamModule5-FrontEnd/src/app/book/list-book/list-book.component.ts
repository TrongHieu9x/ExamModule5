import { Component, OnInit } from '@angular/core';
import {Book} from "../../book";
import {BookService} from "../../book.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateBookComponent} from "../create-book/create-book.component";
import {EditBookComponent} from "../edit-book/edit-book.component";
import {DeleteBookComponent} from "../delete-book/delete-book.component";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getListBook();
  }
  getListBook(){
    this.bookService.getAllBook().subscribe(bookList =>{
      this.books = bookList;
    })
  }

  openDialogDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteBookComponent, {
      data : {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getListBook();
      console.log('The dialog was closed');
    });
  }
}

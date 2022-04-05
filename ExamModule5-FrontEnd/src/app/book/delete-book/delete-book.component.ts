import {Component, Inject, OnInit} from '@angular/core';
import {BookService} from "../../book.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Book} from "../../book";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {

  // @ts-ignore
  book: Book = {}
  status: string = "";
  constructor(private bookService: BookService, private router: Router,@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<DeleteBookComponent>) {
    this.bookService.findBookByID(data.id).subscribe(data =>{
      this.book.id = data.id;
      this.book.author = data.author;
      this.book.description = data.description;
      this.book.title = data.title;
    })
  }

  ngOnInit(): void {
  }

  deleteBook() {
    this.bookService.deleteBook(this.book.id).subscribe(data1 =>{
      alert("xóa sách thành công")
      this.dialogRef.close();
    })
  }
}

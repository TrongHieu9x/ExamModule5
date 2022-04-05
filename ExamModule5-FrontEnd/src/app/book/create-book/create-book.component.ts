import {Component, Inject, OnInit} from '@angular/core';
import {Book} from "../../book";
import {BookService} from "../../book.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  // @ts-ignore
  book: Book = {}
  // @ts-ignore
  status: string = "Mời bạn nhập dữ liệu";
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.bookService.createBook(this.book).subscribe(data =>{
      console.log(data)
      this.status = "Tạo thành công"
    })
  }

  back() {
    this.router.navigate([''])
  }
}

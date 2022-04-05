import {Component, Inject, OnInit} from '@angular/core';
import {BookService} from "../../book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Book} from "../../book";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  // @ts-ignore
  book: Book = {}
  status: string = "";
  id: number=0;
  sub: Subscription;
  constructor(private bookService: BookService, private router: Router,private activeRouter: ActivatedRoute) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      this.bookService.findBookByID(this.id).subscribe(data =>{
        console.log(data);
        this.book.id = data.id;
        this.book.author = data.author;
        this.book.title = data.title;
        this.book.description = data.description;
      })
    })
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.bookService.updateBook(this.book.id,this.book).subscribe(data1 =>{
      console.log(data1);
      this.status = "sửa thành công"
    })
  }

  back() {
    this.router.navigate([''])
  }
}

import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {BookService} from "../../book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Book} from "../../book";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
// @ts-ignore
  book: Book = {}
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

  back() {
    this.router.navigate([''])
  }
}

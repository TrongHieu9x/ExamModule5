import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBookComponent} from "./book/list-book/list-book.component";
import {EditBookComponent} from "./book/edit-book/edit-book.component";
import {CreateBookComponent} from "./book/create-book/create-book.component";
import {DeleteBookComponent} from "./book/delete-book/delete-book.component";
import {DetailBookComponent} from "./book/detail-book/detail-book.component";

const routes: Routes = [
  { path: '', component: ListBookComponent },
  { path: 'edit-book/:id', component: EditBookComponent },
  { path: 'create-book', component: CreateBookComponent },
  { path: 'delete-book/:id', component: DeleteBookComponent },
  { path: 'detail-book/:id', component: DetailBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

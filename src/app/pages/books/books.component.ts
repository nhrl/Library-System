import { title } from 'process';
import { routes } from './../../app.routes';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BookService } from '../services/book.service';
import { LoaderComponent } from "../../Partials/loader/loader.component";

@Component({
    selector: 'app-books',
    standalone: true,
    providers: [BookService],
    templateUrl: './books.component.html',
    styleUrl: './books.component.css',
    imports: [CommonModule, RouterModule, LoaderComponent]
})
export class BooksComponent implements OnInit{
  books: any;
  isLoad: boolean = true;
  data: any;
  id: any;
  isDeleted: boolean = false;
  deleteMessage: boolean = false;
  confirmLoader:boolean = false;
  title:any;
  publisher:any;
  author:any;
  year_pub:any;
  volume:any;
  constructor(private book:BookService,private routes:Router) {}

  ngOnInit(): void {
    this.isLoad =true;
    this.showBooks();
  }

  showBooks() {
      this.book.getData().subscribe(res => {
        console.log(res);
        this.books = res;
        this.isLoad = false;
      })
  }

  displayUpdateBook(id : any) {
    this.routes.navigateByUrl('/dashboard/edit/' +id);
  }

  closeMessage() {
    this.isDeleted = false;
  }

  showDeleteBook(id: any) {
      this.deleteMessage = true;
      this.confirmLoader = true;
      this.id =id;
      this.book.getOneBook(this.id).subscribe(res=> {
          this.data = res;
          this.title = this.data.title;
          this.author = this.data.author;
          this.publisher = this.data.publisher;
          this.year_pub = this.data.year_publish;
          this.volume = this.data.volume;
          this.confirmLoader = false;
      })
  }

  hideMessage() {
    this.deleteMessage = false;
  }

  deleteBook() {
    this.book.deleteBook(this.id).subscribe(res => {
      this.confirmLoader = true;
      this.deleteMessage = false;
      this.isDeleted = true;
      this.ngOnInit();
    })
  }
}

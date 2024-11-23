import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from '../../Partials/loader/loader.component';

@Component({
  selector: 'app-add-book',
  standalone: true,
  providers:[BookService],
  imports: [CommonModule,RouterModule,FormsModule,HttpClientModule,LoaderComponent],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})

export class AddBookComponent {
  title!: string;
  publish!: string;
  author!: string;
  year_pub!: string;
  volume!: string;
  errorMessage: string = "You can't leave this field blank";
  constructor(private bookservice:BookService,
              private routes:Router
              ) {}
  nError: boolean = false;
  pError:boolean = false;
  aError:boolean = false;
  yError:boolean = false;
  vError:boolean = false;
  isLoading:boolean = false;
  success:boolean = false;
  insertBook() {
    if(this.title == null) {
      this.nError = true;
    } else {
      this.nError = false;
    }
    if(this.publish == null) {
      this.pError = true;
    } else {
      this.pError = false;
    }
    if(this.author == null) {
      this.aError = true;
    } else {
      this.aError = false;
    }
    if(this.year_pub == null) {
      this.yError = true;
    } else {
      this.yError = false;
    }
    if(this.volume == null) {
      this.vError = true;
    } else {
      this.vError = false;
    }
    if(this.title != null && this.publish != null && this.author && this.year_pub && this.volume) {
      this.isLoading = true;
      var book = {
        title: this.title,
        publish: this.publish,
        author: this.author,
        year_pub: this.year_pub,
        volume: this.volume
      }
      this.bookservice.insertBook(book).subscribe(res => {
        console.log(res);
        this.isLoading = false;
        this.success =true;
      })
    }
  }
  
  reload() {
      this.success =false;
      this.title = '' ;
      this.publish = '';
      this.author = '';
      this.year_pub = '';
      this.volume = '';
  }
}

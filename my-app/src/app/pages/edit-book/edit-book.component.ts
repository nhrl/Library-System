import { title } from 'process';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,RouterModule } from '@angular/router';
import { BookService } from '../services/book.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from '../../Partials/loader/loader.component';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  providers:[BookService],
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule, LoaderComponent],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit{
  bookid:any;
  data: any;
  succeess: boolean = false;
  isLoading: boolean = false;
  bookform = new FormGroup({
    title: new FormControl(),
    publisher: new FormControl(),
    author: new FormControl(),
    year_pub: new FormControl(),
    volume: new FormControl()
  });
 
    constructor(private route:ActivatedRoute, private book:BookService) {}
    ngOnInit(): void {
      this.bookid = this.route.snapshot.params.id
      this.showData();
    }

    showData() {
      this.isLoading = true;
      this.book.getOneBook(this.bookid).subscribe(res => {
          this.data = res;
          this.bookform.setValue({
            title: this.data.title,
            publisher: this.data.publisher,
            author: this.data.author,
            year_pub: this.data.year_publish,
            volume: this.data.volume
          })
          this.isLoading = false;
      })
    }

    updateBook() {
      var data = this.bookform.value;
        this.book.editBook(this.bookid,data).subscribe(res => {
          console.log(res);
        });
      this.succeess = true;
    }
}

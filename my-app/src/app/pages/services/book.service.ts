import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  constructor(private httpclient:HttpClient) { }

  getData() {
    return this.httpclient.get('http://127.0.0.1:8000/api/books');
  }

  insertBook(book:any) {
    return this.httpclient.post('http://127.0.0.1:8000/api/add_book',book);
  }

  getOneBook(id: any) {
    return this.httpclient.get('http://127.0.0.1:8000/api/getOneBook/'+id)
  }

  editBook(id: any, book: any) {
    return this.httpclient.put('http://127.0.0.1:8000/api/edit-book/'+id,book);
  }

  deleteBook(id:any) {
    return this.httpclient.delete('http://127.0.0.1:8000/api/delete-book/'+ id);
  }
}

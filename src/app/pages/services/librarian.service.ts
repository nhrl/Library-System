import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LibrarianService {

  constructor(private httpClient:HttpClient) { }

  insertLibrarian(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/register',data);
  }

  login(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/login',data);
  }
}

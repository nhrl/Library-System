import { LibrarianService } from './../services/librarian.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [LibrarianService],
  imports: [CommonModule,ReactiveFormsModule,FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    username!: string;
    password!: string;
    valid!: any;
    Uerror: boolean = false;
    Perror: boolean = false;
    UerrorName: string = 'Invalid password';
    constructor (private LibrarianService: LibrarianService, private router: Router ) 
    {}

    login() {
      //Check if input are empty
      if(this.username.length == 0) {
        this.Uerror = true;
        this.UerrorName = "Please enter a username";
      }
      if(this.password.length == 0) {
        this.Perror = true;
        this.UerrorName = "Please enter a password";
      }
        var data = {
          username: this.username,
          password: this.password
        }
        this.LibrarianService.login(data).subscribe(
          res => {
            this.valid = res;
            if(this.valid) {
              this.router.navigateByUrl('/dashboard');
            } else {
              this.Uerror = true;
              this.Perror = true;
            }
          }
        )
        
    }
}

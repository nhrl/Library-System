
import { LibrarianService } from './../services/librarian.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, NgModel } from '@angular/forms';
import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  providers: [LibrarianService,HttpClientModule],
  imports: [CommonModule,FormsModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit{
  name!: string;
  username!: string;
  password!: string;
  errors: any = [];
  constructor(private LibrarianService:LibrarianService,
              private router:Router
              
    ) {

  }
  ngOnInit() {
      
  }
  onSubmit() {
    var inputData = {
      name: this.name,
      username: this.username,
      password: this.password
    }

    this.LibrarianService.insertLibrarian(inputData).subscribe({
      next: (res : any) => {
          this.router.navigateByUrl('/dashboard');
      },
      error: (err : any) => {
          this.errors = err.error.errors;
      } 
    })
    
  }
}

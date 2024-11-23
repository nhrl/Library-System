import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { title } from 'process';
import { DashboardComponent } from './Partials/dashboard/dashboard.component';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path:'register',
        component: RegisterComponent,
        title:'Register'
    },
    {
        path:'dashboard',
        component: DashboardComponent,
        title: 'Dashboard',
        children:[
            {
                path: 'books',
                component: BooksComponent,
                title:'Dashboard'
            },
            {
                path: 'add-books',
                component: AddBookComponent,
                title:'Add Book'
            },
            {
                path:'edit/:id',
                component:EditBookComponent,
                title:"Edit Book"
            }
        ]
    }
];

export default routes;

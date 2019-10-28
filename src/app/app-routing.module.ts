import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddUserComponent } from './add-user/add-user.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { ResponseBookComponent } from './response-book/response-book.component';
import { RequestedBookComponent } from './requested-book/requested-book.component';
import { SearchUserComponent } from './search-user/search-user.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'addBook', component: AddBooksComponent },
  { path: 'searchBook', component: SearchBookComponent },
  { path: 'requestedBook', component: RequestedBookComponent },
  { path: 'responseBook', component: ResponseBookComponent },
  { path: 'searchUser', component: SearchUserComponent },

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

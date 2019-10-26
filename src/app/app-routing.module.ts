import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddLibrarienComponent } from './add-librarien/add-librarien.component';
import { GetAllBooksComponent } from './get-all-books/get-all-books.component';
import { AddBooksComponent } from './add-books/add-books.component';


const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'header',component:HeaderComponent},
  { path:'footer',component:FooterComponent},
  { path:'login',component:LoginComponent},
  { path: 'add-student',component:AddStudentComponent},
  { path: 'add-librarien',component:AddLibrarienComponent},
  { path: 'get-all-books',component:GetAllBooksComponent},
  { path: 'add-books',component:AddBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

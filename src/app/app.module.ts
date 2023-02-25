import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routes } from './router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogDetailComponent } from './components/blogs/blog-detail/blog-detail.component';
import { BlogAddComponent } from './components/blogs/blog-add/blog-add.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AboutComponent } from './components/about/about.component';
import { AboutUpdateComponent } from './components/about/about-update/about-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    BlogsComponent,
    BlogDetailComponent,
    BlogAddComponent,
    AboutComponent,
    AboutUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot({
      closeButton:true,
      progressBar: true,
      timeOut:5000
    }), 
    AngularEditorModule,    
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

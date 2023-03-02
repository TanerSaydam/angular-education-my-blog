import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routes } from './router';
import { AuthService } from './services/auth.service';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,  
    FormsModule,  
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
    NgxPaginationModule,
    ToastrModule.forRoot({
      closeButton:true,
      progressBar: true,
      timeOut:5000
    }),     
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CommonModule } from "@angular/common";
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { routes } from "./app/router";
import { provideHttpClient } from '@angular/common/http'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { NgxPaginationModule } from "ngx-pagination";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { AuthService } from "./app/services/auth.service";

bootstrapApplication(AppComponent,{
  providers: [
    AuthService,
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      RouterModule.forRoot(routes),      
      BrowserAnimationsModule,
      SweetAlert2Module.forRoot(),
      NgxPaginationModule,
      ToastrModule.forRoot({
        closeButton:true,
        progressBar: true,
        timeOut:5000
      }),  
      )
  ]
})
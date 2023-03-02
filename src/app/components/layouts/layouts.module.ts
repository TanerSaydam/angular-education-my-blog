import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutsComponent } from './layouts.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { layoutsRoutes } from './layout.router';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [
    FooterComponent,    
    NavbarComponent,
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    RouterModule.forChild(layoutsRoutes)
  ]  
})
export class LayoutsModule { }

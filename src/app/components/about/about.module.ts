import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutUpdateComponent } from './about-update/about-update.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { AngularEditorModule } from '@kolkov/angular-editor';



@NgModule({
  declarations: [
    AboutComponent,
    AboutUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularEditorModule,
    DirectivesModule,
    RouterModule.forChild([
      {
        path: "",
        component: AboutComponent
      },
      {
        path: "update",
        component: AboutUpdateComponent
      }
    ])
  ]
})
export class AboutModule { }

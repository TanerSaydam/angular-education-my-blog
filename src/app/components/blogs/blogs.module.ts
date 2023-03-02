import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DirectivesModule } from 'src/app/directives/directives.module';



@NgModule({
  declarations: [
    BlogsComponent,
    BlogAddComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
    AngularEditorModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {
        path: "",
        component: BlogsComponent
      },
      {
        path:"add",
        component: BlogAddComponent
      },
      {
        path:"detail/:id",
        component: BlogDetailComponent
      }
    ])
  ],
  providers: [
    DatePipe
  ]
})
export class BlogsModule { }

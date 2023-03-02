import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPipe } from './blog.pipe';



@NgModule({
  declarations: [
    BlogPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlogPipe
  ]
})
export class PipesModule { }

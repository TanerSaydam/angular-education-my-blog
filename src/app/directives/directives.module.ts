import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidDirective } from './valid.directive';



@NgModule({
  declarations: [
    ValidDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ValidDirective
  ]
})
export class DirectivesModule { }

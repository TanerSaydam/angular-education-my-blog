import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor';

import { ValidDirective } from 'src/app/directives/valid.directive';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';
import { EditorConfig } from 'src/app/settings/editor';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ValidDirective,
    AngularEditorModule
  ]
})
export class BlogAddComponent {
  blog: BlogModel = new BlogModel();
  categories: string[] = ["Orman","Genel","Konu Dışı","Yazılım"];
  editorConfig = EditorConfig;

  constructor(
    public _blog: BlogService    
  ) {}

  add(form: NgForm) {
    if (form.valid) {
      this._blog.add(this.blog, () => {
        this.blog = new BlogModel();
      });
    }
  }
}

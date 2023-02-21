import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent {
  blog: BlogModel = new BlogModel();

  editorConfig: AngularEditorConfig = {
      height: '350px',      
  }
  
  constructor(
    public _blog: BlogService
  ){}

  add(){
    this._blog.add(this.blog);
    this.blog = new BlogModel();
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  blog: BlogModel = new BlogModel();
  blogId: number = 0;
  
  constructor(
    private _activated: ActivatedRoute,
    private _blog: BlogService
  ){
    this.blog = {
      title: "asdasdasd",
      content: "asdasdsad",
      createdDate: new Date().toString(),
      id: 0 
    }

    this._activated.params.subscribe(res=>{
      this.blogId = res["id"];

      let index = this._blog.blogs.findIndex(p=> p.id == this.blogId);
      this.blog = this._blog.blogs[index];
    })
  }
}

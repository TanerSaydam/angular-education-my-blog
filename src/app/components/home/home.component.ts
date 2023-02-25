import { Component, Input, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/models/blog.model';

import { SocialMediaModel } from 'src/app/models/social-media.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() socialMedias: SocialMediaModel[] = [];
  blogs: BlogModel[] = [];
  constructor(
    public _blog: BlogService
  ){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this._blog.getAll().subscribe(res=>{
      this.blogs = res;
    });
  }
}

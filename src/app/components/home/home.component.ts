import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BlogModel } from 'src/app/models/blog.model';

import { SocialMediaModel } from 'src/app/models/social-media.model';
import { BlogService } from 'src/app/services/blog.service';
import { HeaderComponent } from '../layouts/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,    
    RouterModule,
    HeaderComponent,
  ]
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

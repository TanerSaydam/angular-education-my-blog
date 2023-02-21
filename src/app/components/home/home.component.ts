import { Component, Input } from '@angular/core';
import { BlogModel } from 'src/app/models/blog.model';
import { SocialMediaModel } from 'src/app/models/social-media.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() socialMedias: SocialMediaModel[] = [];
  constructor(
    public _blog: BlogService
  ){
       
  }

  
}

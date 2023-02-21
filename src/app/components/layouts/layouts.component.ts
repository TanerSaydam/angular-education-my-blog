import { Component } from '@angular/core';
import { SiteModel } from 'src/app/models/site.model';
import { SocialMediaModel } from 'src/app/models/social-media.model';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent {
  site: SiteModel = new SiteModel();
  socialMedias: SocialMediaModel[] = [];

  constructor() {
    this.site.id = 0;
    this.site.pageHeaderContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
    this.site.pageHeaderTitle = "Hoşgeldiniz!";
    this.site.title = "My Blog Page"
    this.site.icon = "blue.png";

    this.socialMedias = [
      {
        id:0,
        icon: "fa fa-github",
        link: "https://github.com/TanerSaydam",
        name: "GitHub",
        btnClass: "btn-github"
      },
      {
        id:1,
        icon: "fa fa-linkedin",
        link: "https://www.linkedin.com/in/taner-saydam-b26336222/",
        name: "LinkedIn",
        btnClass: "btn-primary"
      },
      {
        id:2,
        icon: "fa fa-facebook",
        link: "https://www.facebook.com/taner.saydam.10/",
        name: "Facebook",
        btnClass: "btn-primary"
      }
    ]
  }
}

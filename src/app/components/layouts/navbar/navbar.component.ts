import { Component, Input } from '@angular/core';
import { SiteModel } from 'src/app/models/site.model';
import { SocialMediaModel } from 'src/app/models/social-media.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() site: SiteModel = new SiteModel();
  @Input() socialMedias: SocialMediaModel[] = [];
}

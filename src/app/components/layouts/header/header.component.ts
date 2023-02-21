import { Component, Input } from '@angular/core';
import { SocialMediaModel } from 'src/app/models/social-media.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() socialMedias: SocialMediaModel[] = [];
}

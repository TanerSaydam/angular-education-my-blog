import { Component, Input } from '@angular/core';
import { SocialMediaModel } from 'src/app/models/social-media.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() socialMedias: SocialMediaModel[] = [];
}

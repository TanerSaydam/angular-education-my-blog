import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SocialMediaModel } from 'src/app/models/social-media.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class HeaderComponent {
  @Input() socialMedias: SocialMediaModel[] = [];
}

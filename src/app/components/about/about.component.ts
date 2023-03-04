import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ValidDirective } from 'src/app/directives/valid.directive';
import { AboutModel } from 'src/app/models/about.model';
import { AboutService } from 'src/app/services/about.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AngularEditorModule,
    ValidDirective,
    RouterModule
  ]
})
export class AboutComponent implements OnInit {
  about: AboutModel = new AboutModel();  
  constructor(
    private _about: AboutService,
    public _auth: AuthService
  ){
    this._auth.checkIsAdmin();
  }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this._about.get(res=>{
      this.about = res;
    });
  }
}

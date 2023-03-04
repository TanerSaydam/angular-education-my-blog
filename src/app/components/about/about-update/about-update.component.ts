import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { AboutModel } from 'src/app/models/about.model';
import { AboutService } from 'src/app/services/about.service';
import { EditorConfig } from 'src/app/settings/editor';

@Component({
  selector: 'app-about-update',
  templateUrl: './about-update.component.html',
  styleUrls: ['./about-update.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AngularEditorModule,
    DirectivesModule,
    RouterModule
  ]
})
export class AboutUpdateComponent {
  editorConfig = EditorConfig;
  about: AboutModel = new AboutModel();

  constructor(
    private _about: AboutService,    
  ){}

  ngOnInit(): void {
    this.get();
  }

  update(form: NgForm){
    if(form.valid)    
      this._about.update(this.about,()=>{});
  }

  get(){
    this._about.get(res=>{
      this.about = res;
    });
  }
}

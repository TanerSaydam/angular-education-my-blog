import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AboutModel } from 'src/app/models/about.model';
import { AboutService } from 'src/app/services/about.service';
import { EditorConfig } from 'src/app/settings/editor';

@Component({
  selector: 'app-about-update',
  templateUrl: './about-update.component.html',
  styleUrls: ['./about-update.component.css']
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

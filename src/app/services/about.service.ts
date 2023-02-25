import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AboutModel } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  apiUrl: string = "http://localhost:3000/abouts";
  constructor(
    private _http: HttpClient,
    private _toastr: ToastrService
  ) { }


  update(model: AboutModel, callBack: ()=>void){
    this._http.put<any>(`${this.apiUrl}/${model.id}`,model).subscribe(res=>{
      callBack();
      this._toastr.warning("Hakkımızda bilgileriniz başarıyla güncellendi!");
    });
  }

  get(callBack: (res:AboutModel)=>void){
    this._http.get<AboutModel[]>(this.apiUrl).subscribe(res=>{
      callBack(res[0]);
    })
  }
}

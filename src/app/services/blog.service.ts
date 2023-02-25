import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BlogModel } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService { 
  apiUrl: string = "http://localhost:3000/blogs";
  constructor(
    private _http: HttpClient,
    private _toastr: ToastrService
  ) {}

  getAll(){
   return this._http.get<BlogModel[]>(this.apiUrl)
  }

  getById(id: number){
    return this._http.get<BlogModel[]>(`${this.apiUrl}?id=${id}`);
  }

  add(model: BlogModel, callBack: ()=> void){
    this._http.post<BlogModel>(this.apiUrl,model).subscribe(res=>{
      this._toastr.success("Blog kaydı başarıyla tamamlandı!");
      callBack();
    });
  }  

  delete(id: number, callBack: ()=> void){
    this._http.delete(`${this.apiUrl}/${id}`).subscribe(res=>{
      callBack();
      this._toastr.info("Blog yazısı başarıyla silindi!");
    });
  }
}

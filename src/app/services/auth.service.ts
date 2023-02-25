import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';
import { UserModel } from '../models/user.model';

@Injectable()
export class AuthService {
  isLogin: boolean = false;
  isAdmin: boolean = false;

  apiUrl: string = "http://localhost:3000/users";

  constructor(
    private _router: Router,
    private _http: HttpClient,
    private _toastr: ToastrService
  ) { 
    this.checkIsLogin();
  }

  checkIsLogin(){
    if(localStorage.getItem("user"))
      this.isLogin = true;
    else
      this.isLogin = false;
  }

  logout(){
    localStorage.removeItem("user");
    this.checkIsLogin();
    this._router.navigateByUrl("/");
  }

  login(model: LoginModel){
    this._http.get<UserModel[]>(`${this.apiUrl}?email=${model.email}&password=${model.password}`).subscribe({
      next: (res)=>{                
        if(res.length > 0){
          this.loginSuccess(res[0]);
        }else{
          this._http.get<UserModel[]>(`${this.apiUrl}?userName=${model.email}&password=${model.password}`).subscribe({
            next: (res2)=>{
              if(res2.length > 0){
               this.loginSuccess(res2[0]);
              }else{
                this._toastr.error("Kullanıcı adı/email ya da şifre yanlış!");                
              }
            },
            error: (err: HttpErrorResponse)=>{
              this._toastr.error(`Status Code: ${err.status} - Hata Mesajı: ${err.message}`);
            }
          })
        }
      },
      error: (err: HttpErrorResponse)=>{
        this._toastr.error(`Status Code: ${err.status} - Hata Mesajı: ${err.message}`);        
      }
    })
  }

  loginSuccess(model: UserModel){    
    localStorage.setItem("user",JSON.stringify(model));
    this.checkIsLogin();
    this._router.navigateByUrl("/");
    this._toastr.success("Kullanıcı girişi başarılı");
  }

  register(model: RegisterModel){
    this._http.get<UserModel[]>(`${this.apiUrl}?email=${model.email}&`).subscribe(res=>{
      if(res.length == 0){
        this._http.get<UserModel[]>(`${this.apiUrl}?userName=${model.userName}&`).subscribe(res=>{
          if(res.length == 0){
            this._http.post<UserModel>(this.apiUrl,model).subscribe({
              next: (res)=>{
                this.loginSuccess(res);
              },
              error: (err: HttpErrorResponse)=>{
                this._toastr.error(`Status Code: ${err.status} - Hata Mesajı: ${err.message}`);                
              }
            });
          }else{
            this._toastr.error("Kullanıcı adı zaten kullanılıyor!");           
          }
        })
      }else{
        this._toastr.error("Mail adresi zaten kullanılıyor!");        
      }
    })
    
  }

  checkIsAdmin(){
    if(this.isLogin){
      let model: UserModel = JSON.parse(localStorage.getItem("user"));

      if(model.isAdmin)
        this.isAdmin = true;
      else
        this.isAdmin = false;
    }
  }
}

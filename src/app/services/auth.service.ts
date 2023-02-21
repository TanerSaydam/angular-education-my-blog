import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login.model';
import { UserModel } from '../models/user.model';

@Injectable()
export class AuthService {
  isLogin: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private _router: Router
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
    localStorage.setItem("user",JSON.stringify(model));
    this.checkIsLogin();
    this._router.navigateByUrl("/");
  }

  checkIsAdmin(){
    if(this.isLogin){
      let model: UserModel = JSON.parse(localStorage.getItem("user"));

      if(model.roles.includes("Admin"))
        this.isAdmin = true;
      else
        this.isAdmin = false;
    }
  }
}

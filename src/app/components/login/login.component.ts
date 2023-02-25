import { Component } from '@angular/core';
import { empty } from 'rxjs';

import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel: LoginModel = new LoginModel();

  constructor(   
    public _auth: AuthService
  ){} 

  checkFormIsValid(){
    if(this.loginModel.email.length > 3 && this.loginModel.password.length > 3 ){
      return false
    }

    return true;
  }
}

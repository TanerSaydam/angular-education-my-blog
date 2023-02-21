import { Component } from '@angular/core';

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

  writeConsole(){
    console.log(this.loginModel)
  }
}

import { Component } from '@angular/core';
import { RegisterModel } from 'src/app/models/register.model';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register: RegisterModel = new RegisterModel();

  constructor(
    public _auth: AuthService
  ){

  }

  checkFormIsValid(){
    if(
      this.register.email.length > 3 && 
      this.register.password.length > 3 &&
      this.register.name.length > 3 &&
      this.register.userName.length > 3){
      return false
    }

    return true;
  }
}

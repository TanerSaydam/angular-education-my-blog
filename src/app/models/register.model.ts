import { LoginModel } from "./login.model";

export class RegisterModel extends LoginModel{
    name: string = "";   
    userName: string = "";
    isAdmin: boolean = false;
}
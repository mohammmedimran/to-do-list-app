import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  LoginArray=[];a=[];name;password;
  constructor() { }
   getmethod(){
    return this.LoginArray;
   }
   setmethod(UsernamePassword){
    this.LoginArray.push(UsernamePassword);
   }
   ToCheckAuthGuard=false;
     ToSetAuthGuard(a){
       this.ToCheckAuthGuard=true;
    }
    AuthGuard(){
      return this.ToCheckAuthGuard;
  }
  
}

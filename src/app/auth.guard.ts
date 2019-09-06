import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router:Router,private _LoginService:LoginService) { }
  canActivate():boolean{
    if(this._LoginService.AuthGuard()){
      return true;
    }
    else{
      this.router.navigate(["/login"]);
      return false;
    }

  }
}

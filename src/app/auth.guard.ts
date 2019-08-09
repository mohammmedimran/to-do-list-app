import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Service1Service } from './service1.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router:Router,private _Service1Service:Service1Service) { }
  canActivate():boolean{
    if(this._Service1Service.l()){
      console.log(this._Service1Service);
      console.log("Hello");
      
      return true;
    }
    else{
      console.log("Hiiiiiiiiiiii");
      this.router.navigate(["/login"]);
      return false;
    }

  }
}

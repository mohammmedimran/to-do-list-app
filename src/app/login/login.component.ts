import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg;notlogin;
  constructor(private router:Router,private _LoginService:LoginService) { }
  ngOnInit() {
  }
  login(username,password){
     let LoginArray=this._LoginService.getmethod();
     let logedin=false;
     for(let i=0;i<LoginArray.length;i++){
      let UsernamePassword=LoginArray[i];
     if(UsernamePassword.name==username && UsernamePassword.password==password){
      logedin=true;
    }
    }
   
    if(LoginArray.length==0){
     this.msg="please register";
    }else if(logedin==true){
      this._LoginService.ToSetAuthGuard(logedin);
      this.router.navigate(['/todohome']);
   }
    else if(logedin==false){
      this.msg="please register";
      }
    }
   register(){
    this.router.navigate(['/register']);
   }
  }


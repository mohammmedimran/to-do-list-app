import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private _Service1Service:Service1Service) { }
msg;notlogin
  ngOnInit() {
  }
  m1(var1,var2){
    var r=this._Service1Service.getmethod();
     var b=false;
     console.log(b);
    for(var i=0;i<r.length;i++){
      var p=r[i];
     if(p.name==var1 && p.password==var2){
       b=true;
    }
    }
    console.log(b);
  if(r.length==0){
     this.msg="please register";
    }else if(b==true){
      this._Service1Service.tf(b);
      this._Service1Service.m1(var1,var2);
      console.log("Hello");
      this.router.navigate(['/todohome']);
     
    }
    else if(b==false){
      this.msg="please register";
      }
    }
   register(){
    this.router.navigate(['/register']);
   }
  }






/*

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Service1Service } from '../service1.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg="";
  constructor(private router:Router,private _Service1Service:Service1Service) { }

  ngOnInit() {
  }
  m1(var1,var2){
    var r=this._Service1Service.getmethod();
     var b=false;
    for(var i=0;i<r.length;i++){
      var p=r[i];
     if(p.name==var1 && p.password==var2){
       b=true;
     }
    }
    
    if(r.length==0){
      this.msg="please register"
      this.router.navigate(['/login']);
    }else if(b==true){
      this._Service1Service.m1(var1,var2);
      this.router.navigate(['/Home']);
    }
    else if(b==false){
        this.msg="please register"
        this.router.navigate(['/login']);
      }
*/

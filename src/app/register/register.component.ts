import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { LoginService } from '../login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
message=""
ReferenceVariable=new Register('','','');
  constructor(private router:Router,private _LoginService:LoginService) { }

  ngOnInit() {
  }
  Register(NameValid,PhoneValid){
    if(NameValid!=false && PhoneValid!==false){
    this._LoginService.setmethod(this.ReferenceVariable);
    alert("registerd");
    this.router.navigate(['/login']);
    }else{
      this.message="please fill the form correctly";
    }
  }
}




import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { Service1Service } from '../service1.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
r=[];message=""
S=new Register('','','');
  constructor(private router:Router,private _Service1Service:Service1Service) { }

  ngOnInit() {
  }
  m2(a,b){
    if(a!=false && b!==false){
    this._Service1Service.setmethod(this.S);
    alert("registerd");
  this.router.navigate(['/login']);
    }else{
      this.message="please fill the form correctly";
    }
  }




  

}




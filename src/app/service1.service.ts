import { Injectable } from '@angular/core';
import{HttpClient} from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class Service1Service {
r=[];
a=[];
name;
password;
  constructor() { }
  getmethod(){
   return this.r;
  }
  setmethod(Rp){
   this.r.push(Rp);
  }
  m1(var1,var2){
  for(var i=0;i<this.r.length;i++){
    var p=this.r[i];
    if(p.name==var1 && p.password==var2){
      this.name=p.name;
      this.password=p.password;
    }
  }
  }
  m2(){
    return this.name+","+this.password;
  }
//pppppppppppppppppppppppppppppppppp
todos=[];
id=0;

returnid(){
  console.log(this.id);
  return this.id;
}
  addtodos(value){
    this.id=this.id+1;
    //console.log("////////////");
    //console.log(this.id);
    //console.log("////////////");
    if(value!=""){
    var time=new Date();
var h={id:value.id,label:value.label,date:value.date,time:value.time,done:value.done,Description:value.Description}
this.todos.push(h);
  }
}
  gettodo(){
    return this.todos;
  }
  deletetodo(take1){
    this.todos=this.todos.filter(t=>t.id!==take1.id);
    }
    tp=false;
    tf(a){
       this.tp=true;
    }
    l(){
      return this.tp;
  }
}
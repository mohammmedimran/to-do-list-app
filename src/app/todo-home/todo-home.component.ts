import { Component } from '@angular/core';
import { LineToLineMappedSource } from 'webpack-sources';
import { Service1Service } from '../service1.service';
import { ENGINE_METHOD_PKEY_ASN1_METHS, SSL_OP_MSIE_SSLV2_RSA_PADDING } from 'constants';
@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent {
  g; p; Display = "notodos"; dd = "y"; My = "none"; ora = "none"; m = "";
  todos = this._Service1Service.gettodo();
  alltodos; c = 0; uncheckedtodo;
  constructor(private _Service1Service: Service1Service) {
    if (this.todos.length != 0) {
      this.dd = "n";
      this.Display = "";
    }
    this.g = this._Service1Service.m2();
    var p1 = this.g.split(",");
    this.p = p1[0];
  }

  id = this._Service1Service.returnid();//id=0
  t = ""; d = "00:00:00"; perticular1 = "none";
  addtodos(value, d, t, text) {

    
    this.id = this.id + 1;
    this.My = "none";
    if (value != "" && d != "00:00:00" && t != "") {
      this.m = "";
      this.Display = "";
      this.dd = "n";

      //-----------------
      var g = this._Service1Service.gettodo();
      for (var i = 0; i < g.length; i++) {
        var repeat = g[i];
        if (repeat.label == value) {
          this._Service1Service.deletetodo(repeat);
        }


      }
      //------------------------



      var h = { id: this.id, label: value, date: d, time: t, done: false, Description: text };
      var r = this._Service1Service.addtodos(h);
      this.todos = this._Service1Service.gettodo();
      
      this.todos.sort((a, b) => {
       
        var sp = a.date;
        var spp = b.date;
        var time1 = a.time;
        var time2 = b.time;
        var sp1 = sp.split("-")
        var sp2 = spp.split("-")
        var timesplit1 = time1.split(":");
        var timesplit2 = time2.split(":");
       
        var h = timesplit1[0];
        var h1 = timesplit2[0];
        
        var a0 = Number(sp1[0]);
        var b0 = Number(sp2[0]);
        var a1 = Number(sp1[1]);
        var b1 = Number(sp2[1]);
        var a11 = Number(sp1[2]);
        var b11 = Number(sp2[2]);
        //console.log(a1);
        //console.log(b1);
       
        if (a0 != b0) {
          return a0 - b0;
        } else if (a1 != b1) {
          return a1 - b1;
        } else if (a11 != b11) {
          return a11 - b11;
        } else {
             return h - h1;
        }
      });

     
      this.todos.sort((a, b) => {
        return a.done - b.done;
      });
      this.alltodos = this.todos.length;

    } else if (t == '' && d == "00:00:00") {
      alert("please fill correctly");
      this.My = "block";

    }
  }

  deletetodo(todo) {
    this._Service1Service.deletetodo(todo);
    this.todos = this._Service1Service.gettodo();
    this.alltodos = this.alltodos - 1;
    this.todos.sort((a, b) => {
      var sp = a.date;
      var spp = b.date;
      var time1 = a.time;
      var time2 = b.time;
      var sp1 = sp.split("-")
      var sp2 = spp.split("-")
      var timesplit1 = time1.split(":");
      var timesplit2 = time2.split(":");
      var h = timesplit1[0];
      var h1 = timesplit2[0];
     
      var a0 = Number(sp1[0]);
      var b0 = Number(sp2[0]);
      var a1 = Number(sp1[1]);
      var b1 = Number(sp2[1]);
      var a11 = Number(sp1[2]);
      var b11 = Number(sp2[2]);
      
      if (a0 != b0) {
        return a0 - b0;
      } else if (a1 != b1) {
        return a1 - b1;
      } else if (a11 != b11) {
        return a11 - b11;
      } else {
        return h - h1;
      }

    });
    this.todos.sort((a, b) => {
      return a.done - b.done;
    });
    this.alltodos = this.todos.length;
        if (this.alltodos != 0) {
          this.c = this.c - 1;
    } else {
      this.Display = "Notodos";
      this.dd = "y";
    }
  }
  check(t) {

    this._Service1Service.deletetodo(t);
    var h = { id: t.id, label: t.label, date: t.date, time: t.time, done: !t.done, Description: t.Description };
    this._Service1Service.addtodos(h);
    this.todos = this._Service1Service.gettodo();
    
    this.todos.sort((a, b) => {
      return a.done - b.done;
    });
    this.c = this.c + 1;

  }

  checkedmsgs(tp) {

    console.log("hi");
    this.todos = [];
    var r = this._Service1Service.gettodo();
    for (var i = 0; i < r.length; i++) {
      if (r[i].done == true) {
        
        this.todos.push(r[i]);
      }
    }

  }
  all() {

    this.todos = [];
    var r = this._Service1Service.gettodo();
    this.todos = r;
  }
  uncheck() {
    
    this.todos = [];
    var r = this._Service1Service.gettodo();
    for (var i = 0; i < r.length; i++) {
      if (r[i].done == false) {
      
        this.todos.push(r[i]);
      }
    }

  }

  openForm(emp) {
    if (emp != "") {
   
      this.My = "block";
    }
    else {
      alert("please add to-dolist")
    }
  }

  closeForm() {
    this.m = "";
    this.My = "none";
  }
  hh = "on";
  one = [];
  desc(app, hh) {
   
    if (hh == "on") {
      this.ora = "open";
      this.one = [];
      var r = this._Service1Service.gettodo();
      for (var i = 0; i < r.length; i++) {
        if (r[i].label == app) {
          var p = { label: r[i].label, date: r[i].date, time: r[i].time, Description: r[i].Description }
          this.one.push(p);
        }
      }
      this.hh = "off";
    } else if (hh == "off") {
      this.ora = "close";
      this.hh = "on"
    }
  }
  close() {
    this.ora = "close";
    this.hh = "on";
  }

  perticular() {
    this.perticular1 = "popen";
  }
  perticularclose1() {
    this.perticular1 = "pclose";
  }
  perticularclose(p) {
    this.perticular1 = "pclose";
    console.log(p);
    this.todos = [];
    var r = this._Service1Service.gettodo();
    for (var i = 0; i < r.length; i++) {
      if (r[i].date == p) {
        //console.log(this.todos[i]);
        this.todos.push(r[i]);

      }
    }

  }
  side = "sidenavclose";
  c1() {
    this.side = "sidenavclose"
  }
  o() {
    
    this.side = "sidenavopen"
  }

  edit(a) {
   
    this.My = "block";

    this.m = a;
  }




}

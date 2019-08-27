import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-home-body-component',
  templateUrl: './todo-home-body-component.component.html',
  styleUrls: ['./todo-home-body-component.component.css']
})
export class TodoHomeBodyComponentComponent implements OnInit {
NoTodos="yes";
Display="NoTodos";
perticularDateTodos = "perticularDateTodosclose";
TextValue="";
DescriptionSlide="on";
todos=this._TodoService.gettodo();
id = this._TodoService.returnid();
  
constructor(private _TodoService: TodoService ) {}
ngOnInit(){
  if(this._TodoService.gettodo().length!=0){
    this.NoTodos="no"
    this.Display=""
  }else if(this._TodoService.gettodo().length==0){
    this.NoTodos="yes"
    this.Display="notodos"
  }
}
perticularDateTodosOpen() {
  this.perticularDateTodos = "perticularDateTodosopen";
}
perticularDateTodosclose() {
  this.perticularDateTodos = "perticularDateTodosclose";
}
perticularDateTodosSubmit(date) {
  this.perticularDateTodos = "perticularDateTodosclose";
  this.todos = [];
  let gettodo = this._TodoService.gettodo();
  for (var i = 0; i < gettodo.length; i++) {
    if (gettodo[i].date == date) {
      this.todos.push(gettodo[i]);

    }
  }

}
DeleteTodo(todo) {
  this._TodoService.DeleteTodo(todo);
  this.todos = this._TodoService.gettodo();
  if(this._TodoService.gettodo().length!=0){
    this.NoTodos="no"
    this.Display=""
  }else if(this._TodoService.gettodo().length==0){
    this.NoTodos="yes"
    this.Display="notodos"
  }
  }

check(checktodo) {
  this._TodoService.DeleteTodo(checktodo);
  let todo = { id: checktodo.id, label: checktodo.label, date: checktodo.date, time: checktodo.time, done: !checktodo.done, Description: checktodo.Description };
  this._TodoService.addtodos(todo);
  this.todos = this._TodoService.gettodo();
  this.todos.sort((Object1, Object2) => {
    return Object1.done - Object2.done;
  });
 }

checkedmsgs() {
  this.todos = [];
  let gettodo = this._TodoService.gettodo();
  for (let i = 0; i < gettodo.length; i++) {
    if (gettodo[i].done == true) {
      
      this.todos.push(gettodo[i]);
    }
  }

}

all() {
 this.todos = [];
  let gettodo = this._TodoService.gettodo();
  this.todos = gettodo;
}
uncheck() {
  this.todos = [];
  let gettodo = this._TodoService.gettodo();
  for (var i = 0; i < gettodo.length; i++) {
    if (gettodo[i].done == false) {
    
      this.todos.push(gettodo[i]);
    }
  }

}

}



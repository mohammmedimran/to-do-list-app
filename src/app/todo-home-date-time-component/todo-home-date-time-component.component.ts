import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-home-date-time-component',
  templateUrl: './todo-home-date-time-component.component.html',
  styleUrls: ['./todo-home-date-time-component.component.css']
})
export class TodoHomeDateTimeComponentComponent implements OnInit {
  ngOnInit(){}
  @Input() TextValue1
  @Output() ReturnTextValue=new EventEmitter;
  @Output() todorefresh=new EventEmitter;
  @Output() NoTodos=new EventEmitter;
  @Output() Display=new EventEmitter;
  Description="";
  previousDescription;
  time = "";
  date = "00:00:00";
  EnterDateTime = "EnterDateTimeNone";
  disabled=false;
  constructor(private _TodoService: TodoService) { }
  OpenDateTimeBlock(value){
  if(value!=""){
    this.EnterDateTime = "EnterDateTimeBlock";
  }else{
    alert("please enter value")
  }
  }
  CloseDateTimeBlock() {
    this.EnterDateTime = "EnterDateTimeNone";
    this.ReturnTextValue.emit("");
    this.Description="";
    this.time = "";
    this.date = "00:00:00";
  }
     addtodos(TextValue,date,time,Description){
      this.Description="";
      this.time = "";
      this.date = "00:00:00";
    this.todorefresh.emit(this._TodoService.gettodo())
    if (TextValue!="" && date != "00:00:00" && time != "") {
      let todo=this._TodoService.gettodo();
      for(let i=0;i<todo.length;i++){
        let ptodos=todo[i];
        if(ptodos.label===TextValue){
          this._TodoService.DeleteTodo(todo[i]);
        }
      }
      this.todorefresh.emit(this._TodoService.gettodo());
    let addtodo={id:1,label:TextValue,date:date,time:time,done:false,Description:Description}
    this._TodoService.addtodos(addtodo);
    this.ReturnTextValue.emit("");
    this.EnterDateTime = "EnterDateTimeNone";
    this.time = "";
    this.date = "00:00:00";
    if(this._TodoService.gettodo().length!=0){
      this.NoTodos.emit("n");
      this.Display.emit("");
    } 
    }else{
      alert("please fill correctly")
        }
  }
  edit(label,time,date,Description){
    this.ReturnTextValue.emit(label);
    this.previousDescription=Description;
    this.time =time;
    this.date = date;
    this.Description =Description;
    this.EnterDateTime = "EnterDateTimeBlock";

  }
 
}

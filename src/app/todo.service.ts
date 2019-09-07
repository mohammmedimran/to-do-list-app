import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos=[];
id=1;
  constructor() { }
returnid(){
  return this.id;
}
addtodos(addtodo){
    this.todos.sort((Object1, Object2) => {
      return Object1.done - Object2.done;
    });
    this.id=this.id+1;
   
     var h={id:this.id,label:addtodo.label,date:addtodo.date,time:addtodo.time,done:addtodo.done,Description:addtodo.Description}
this.todos.push(h);
  }

  gettodo(){
   this.todos.sort((Todo1, Todo2) => {
      let Todo1date = Todo1.date;
      let Todo2date = Todo2.date;
      let Todo1time = Todo1.time;
      let Todo2time = Todo2.time;
      let Todo1datesplit = Todo1date.split("-")
      let Todo2datesplit=Todo2date.split("-")
      let timesplit1 = Todo1time.split(":");
      let timesplit2 = Todo2time.split(":");
      let Todotime1 = timesplit1[0];
      let Todotime2 = timesplit2[0];
     
      let todo1month = Number(Todo1datesplit[0]);
      let todo2month = Number(Todo2datesplit[0]);
      let todo1date = Number(Todo1datesplit[1]);
      let todo2date = Number(Todo2datesplit[1]);
      let todo1year= Number(Todo1datesplit[2]);
      let todo2year = Number(Todo2datesplit[2]);
      
      if (todo1month != todo2month) {
        return todo1month - todo2month;
      } else if (todo1date != todo2date) {
        return todo2date - todo2date;
      } else if (todo1year != todo2year) {
        return todo1year - todo2year;
      } else {
        return Todotime1 - Todotime2;
      }

    });
   
    this.todos.sort((Object1, Object2) => {
      return Object1.done - Object2.done;
    });
    return this.todos;
}
  DeleteTodo(deletetodo){
  this.todos=this.todos.filter(t=>t.id!==deletetodo.id);
    }
    
}

import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-tododescription',
  templateUrl: './tododescription.component.html',
  styleUrls: ['./tododescription.component.css']
})
export class TododescriptionComponent implements OnInit {
  DescriptionCard="close";
  @Output() DescriptionSlide=new EventEmitter();
  toggle = "on";
   DescriptionData = [];
  constructor(private _TodoService: TodoService) { }
  ngOnInit() {
  }
  close() {
    this.DescriptionCard = "close";
    this.DescriptionSlide.emit("on")
  }
  descriptionslide(Todoname,descriptionslideoff) {
    
   if (this.toggle == "on") {
      this.DescriptionCard = "open";
      this.DescriptionData = [];
      let gettodos = this._TodoService.gettodo();
      for (let i = 0; i < gettodos.length; i++) {
        if (gettodos[i].label == Todoname) {
          let p = { label: gettodos[i].label, date: gettodos[i].date, time: gettodos[i].time, Description: gettodos[i].Description }
          
          this.DescriptionData.push(p);
        }
      }
      this.toggle= "off";
      this.DescriptionSlide.emit("off")
    } else if (this.toggle == "off") {
      this.DescriptionCard = "close";
      this.toggle = "on"
      this.DescriptionSlide.emit("on")
    }
  }
  
}

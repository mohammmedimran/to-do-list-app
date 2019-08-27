import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoheader',
  templateUrl: './todoheader.component.html',
  styleUrls: ['./todoheader.component.css']
})
export class TodoheaderComponent implements OnInit {

sidenavbar = "sidenavclose";
constructor() { }
ngOnInit() {
}

SidenavClose() {
  this.sidenavbar = "sidenavclose"
}
SidenavOpen() {
  this.sidenavbar = "sidenavopen"
}
}

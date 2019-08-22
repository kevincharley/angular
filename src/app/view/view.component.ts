import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
name:string;
age:number;
email="dhghd"
address;
hobbies;
  constructor() { 
  this.name="arun"
  this.age=22
  this.email="xts@dgdg"
 this.address={houseno:"gdgdgd",street:"gdggg",dist:"dggd"}
 this.hobbies=["rgtr","sdshh"]
  }

  ngOnInit() {
  }

}

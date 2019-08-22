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
projects:any[]=[];
address;
hobbies;
  constructor() { 
  this.name="arun"
  this.age=22
  this.email="xts@dgdg"
 this.address={houseno:"gdgdgd",street:"gdggg",dist:"dggd"}
 this.hobbies=["rgtr","sdshh","jugf"]
 this.projects=[{name:"t1",duration:"30 days",enddate:"12/12/12"},{name:"t2",duration:"40 days",enddate:"12/17/19"}]

  }

  ngOnInit() {
  }
public add(){
  let data={name:"tr1",duration:"30 days",enddate:"12/12/12"}
  this.projects.push(data);
}


}

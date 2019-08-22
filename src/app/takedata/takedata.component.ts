import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takedata',
  templateUrl: './takedata.component.html',
  styleUrls: ['./takedata.component.css']
})
export class TakedataComponent implements OnInit {
  view:Boolean
  names:string
 aa:string
 bb:string
 ans:number
 res:number
 mark:string
 sta:string
  constructor() {
  
   }

  ngOnInit() {
  }
public name(){
  this.view=true
}
public add(){
  this.ans= parseInt(this.aa)+parseInt(this.bb)
}
public diff(){
  this.ans= parseInt(this.aa)-parseInt(this.bb)
}
public get(){
  this.res= parseInt(this.mark)
  if(this.res>50){
    this.sta="pass"
  }
  else{
    this.sta="fail"
  }
}
}

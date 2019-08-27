import { Component, OnInit } from '@angular/core';
import {CalcService} from '../calc.service'
import {MsgService} from '../msg.service'

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css']
})
export class DatasComponent implements OnInit {
val;
val1;
a1;
b1;
ans;
name1

m;

  constructor(private ca:CalcService ,private ms:MsgService) { }

  ngOnInit() {
  
 
  }
public sub(){
this.ans=this.ca.sub(parseInt(this.a1),parseInt(this.b1))
}
total(){
  this.ans=this.ca.add1(parseInt(this.a1),parseInt(this.b1))
}
show(){
 
   this.name1=this.ca.message({name:"arun"})
   console.log(this.name1)
    
 }
 view(){
  this.ms.getdata().subscribe(data=>{
    
    this.m=data;

  console.log(this.m)
})
 }
}

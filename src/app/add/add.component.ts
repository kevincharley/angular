import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
a
val
name:string
id:string
price:string
p:number
  constructor( private ad:ProductService) { }

  ngOnInit() {
  }
public adddata(){
  this.p=parseInt(this.price)
this.ad.postadd(this.name,this.p,this.id).subscribe(datas=>{
  console.log(datas)

})



}
}

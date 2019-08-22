import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
products:any[];
mycart:any[];
view:boolean;

  constructor() {
    this.products=[{name:"printer",price:4546,company:"hp"},{name:"scanner",price:5665,company:"hp"},{name:"keyboard",price:905,company:"hp"}]
    this.mycart=[]
   }

  ngOnInit() {
  }
public add(i){
  let data=this.products[i]
  this.mycart.push(data)
}
public rem(x){
  this.mycart.splice(x,1)
}
public vie(){
this.view=true

}
public hid(){
  this.view=false
}

}

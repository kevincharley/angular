import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-see',
  templateUrl: './see.component.html',
  styleUrls: ['./see.component.css']
})

export class SeeComponent implements OnInit {
m
  constructor( private vw:ProductService, private rt:Router) { }

  ngOnInit() {
    
  }
  show(){
    this.vw.getview().subscribe(datas=>{

      console.log("datas")
      this.m=datas;
  
   
    }) 
}

  

}

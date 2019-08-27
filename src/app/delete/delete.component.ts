import { Component, OnInit, Inject ,Injectable} from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
val
user
val1
val2
  constructor() { }

  ngOnInit() {

  this.user= localStorage.getItem("userName")
  }
add(){
  
   localStorage.setItem("userName",this.val)
   var item={id:this.val,name:this.val1,price:this.val2}
}
}

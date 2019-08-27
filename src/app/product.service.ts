import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private hc:HttpClient) { }
  public getview(){
    let url= "http://localhost:8000/view"
    return this.hc.get(url)
  }
  public postadd(name ,p,id){
    let url="http://localhost:8000/add"
    return this.hc.post(url,{productName:name,productId:id,productPrice:p})
  }
  public editit(){
    var url="http://localhost:8000/edit"
    return this.hc.get(url,)
  }
  
}

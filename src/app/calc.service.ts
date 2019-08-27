import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }
  public add(){
    return 10+20;
  }
public add1(x:number,y:number){
return x+y}



public sub(x:number,y:number){
  return x-y
}


 public message(x){
   return {msg:"welcome "+x.name}
 }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor( private myHttp:HttpClient) { 
  }

  getServicesFromHttp(){
    return this.myHttp.get<any>("https://dummy.restapiexample.com/api/v1/employees")
  }
  getMsg(){
    console.log("getMsg");
  }
popUp(){
  alert("popUp");
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private myHttp: HttpClient) {
  }

  BASE_URL = "https://dummy.restapiexample.com/api/v1"

  getEmployee(): Observable<any> {
    return this.myHttp.get<any>("https://dummy.restapiexample.com/api/v1/employees");
  }
  getEmployeeById(id: number): Observable<any> {
    return this.myHttp.get<any>(` https://dummy.restapiexample.com/api/v1/employee/${id}`);
  }
  createEmployee(data: any): Observable<any> {
    // return this.myHttp.post<any>(`this.BASE_URL/create`,data);
    return this.myHttp.post<any>("  https://dummy.restapiexample.com/api/v1/create", data);

  }
  getMsg() {
    console.log("getMsg");
  }
  popUp() {
    alert("popUp");
  }

}

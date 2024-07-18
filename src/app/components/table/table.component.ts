import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { EmployeeService } from '../../services/EmployeeService';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  listData:any[]=[];


  constructor(private EmployeeService:EmployeeService, private myRouter:Router){
    //EmployeeService.getMsg();
  }
  ngOnInit(){
    this.getEmployee();
      }
    
  OnClick(){
      this.EmployeeService.popUp();
    }
    getEmployee(){
    this.EmployeeService.getEmployee().pipe(take(1)).subscribe(res=>{
      console.log(res?.data)
      this.listData=res.data;

    });;
  }

  getEmployeeById(id:number){
    this.EmployeeService.getEmployeeById(id).pipe(take(1)).subscribe(res=>{
      
      console.log(res?.data)
    });;
  }

  openEmployeePage(id:number){
  this.myRouter.navigateByUrl(`/form/${id}`);
}
}

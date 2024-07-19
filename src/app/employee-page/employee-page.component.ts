import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { EmployeeService } from '../services/EmployeeService';

@Component({
  selector: 'app-employee-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-page.component.html',
  styleUrl: './employee-page.component.scss'
})
export class EmployeePageComponent {
  currentId=0;
  data:any;
constructor(private myActiveRouter:ActivatedRoute, private employeeSrv:EmployeeService){};

ngOnInit(){
  this.myActiveRouter.params.pipe(take(1)).subscribe((parm:any)=>{
this.currentId=parm.id;
this.employeeSrv.getEmployeeById(this.currentId).pipe(take(1)).subscribe(data=>
  {
this.data=data;
  })
  })}
}

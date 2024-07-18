import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-employee-page',
  standalone: true,
  imports: [],
  templateUrl: './employee-page.component.html',
  styleUrl: './employee-page.component.scss'
})
export class EmployeePageComponent {
  currentId=null;
constructor(private myActiveRouter:ActivatedRoute){};

ngOnInit(){
  this.myActiveRouter.params.pipe(take(1)).subscribe((parm:any)=>{
this.currentId=parm.id;
  })}
}

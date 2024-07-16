import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  standalone: false,
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  customerName: string="";
  customerAddress: string="";
  customerEmail: string="";
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }

}

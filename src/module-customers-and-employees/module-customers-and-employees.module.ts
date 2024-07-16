import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from '../app/components/employees/employees.component';
import { CustomersComponent } from '../app/components/customers/customers.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainEmployeeComponent } from '../app/components/main-employee/main-employee.component';
import { ErrorComponent } from '../app/components/error/error.component';


@NgModule({
  declarations: 
  [EmployeesComponent,
  MainEmployeeComponent,
    CustomersComponent,
   ErrorComponent],//הצהרה על מי אני אחראי
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[CustomersComponent,
    MainEmployeeComponent
  ],//מייצא

})
export class ModuleCustomersAndEmployeesModule { }

import { Routes } from '@angular/router';
import { homedir } from 'os';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { MainEmployeeComponent } from './components/main-employee/main-employee.component';

export const routes: Routes = [

    {path:'home', component:HomeComponent},
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'employee',loadChildren:()=>import('../module-customers-and-employees/module-customers-and-employees.module')
    .then(m=>m.ModuleCustomersAndEmployeesModule),
     component:MainEmployeeComponent},
    {path:'**', component:ErrorComponent}
];

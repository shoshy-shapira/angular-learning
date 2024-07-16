import { Component } from '@angular/core';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  constructor(private serviceTable:TableService){
    serviceTable.getMsg();
  }
  OnClick(){
      this.serviceTable.popUp();
    }
  getTable(){
    this.serviceTable.getServicesFromHttp().subscribe(res=>{
      console.log(res?.data)
    });;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-customers',
  standalone: false,
 // imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})




export class CustomersComponent implements OnInit {
  customerGroup!: FormGroup;
  customerDetails:any;
  submitted: boolean = false;


  ngOnInit():void{
    this.customerGroup=new FormGroup({
      name:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required]),
      address:new FormControl("",[Validators.required]),
    })
  }
  onSubmit() {
    this.submitted = true;
    this.customerDetails=this.customerGroup.value;
    console.log(this.customerDetails)
  }
}

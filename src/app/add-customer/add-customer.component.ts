import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../Model/Customer";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styles: [
  ]
})
export class AddCustomerComponent implements OnInit {

  CustomerType: CustomerType;
  name: string;
  age: number;
  type: CustomerType;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  Add(){
    this.customerService.CreateCustomer({
      name: this.name,
      age: this.age,
      type: this.type,
      photoUrl: '',
      categories: [],
      description: '',
      address: {
        city: '',
        houseNumber: 0,
        street: ''
      }
    }).subscribe();
  }
}

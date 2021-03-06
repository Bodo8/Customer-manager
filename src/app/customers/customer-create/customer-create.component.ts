import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../Model/customer";
import {CustomerService} from "../customer.service";
import {MessageService} from "../../core/message.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'cus-customer-create',
  templateUrl: './customer-create.component.html',
  styles: [
  ]
})
export class CustomerCreateComponent implements OnInit {

  name: string;
  age: number;
  typeCust: CustomerType;
  eCustomerType = CustomerType;

  constructor(private customerService: CustomerService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  add(form: NgForm){
    this.customerService.createCustomer({
      name: this.name,
      age: this.age,
      type: this.typeCust,
      photoUrl: '',
      categories: [],
      description: '',
      address: {
        city: '',
        houseNumber: 0,
        street: ''
      }
    }).subscribe(
        () => this.messageService.success("Dodano klienta")
    );
    form.resetForm();
  }
}

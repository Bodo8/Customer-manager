import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer, CustomerType} from "../Model/customer";
import {CustomerDetailsComponent} from "../customer-details/customer-details.component";
import {CustomerService} from "../customer.service";
import {MessageService} from "../../core/message.service";
import {Observable} from "rxjs";

@Component({
  selector: 'cus-customer-browser',
  templateUrl: './customer-browser.component.html',
  styles: [
  ]
})
export class CustomerBrowserComponent implements OnInit {

  @ViewChild(CustomerDetailsComponent) detailsComponent: CustomerDetailsComponent;

  customersShift: Customer[];
  customers: Customer[];
  customer: Customer;

  constructor(private customerService: CustomerService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.refresh();
  }

  onShift(direction: string){
    const index = this.customers.indexOf(this.customer);
    if (direction === 'prev' && index > 0) {
      this.customer = this.customers[index - 1];
    } else if (direction === 'next' && index < this.customers.length - 1) {
      this.customer = this.customers[index + 1];
    }
  }
  deleteCustomer(){
    this.customerService.deleteCustomer(this.customer).subscribe(
        () => {
          this.refresh();
          this.messageService.success("Klient został usunięty");
        });
  }

  changeColor(){
    this.detailsComponent.ChangeColor()
  }

  private refresh(){
    //this.customer = null;
   // this.customers$ = this.customerService.getCustomers();
    this.customerService.getCustomers().subscribe(
        response => { this.customers = response;
          this.customer = this.customers[0];
        }
    );
  }
}

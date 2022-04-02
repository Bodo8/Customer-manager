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
  customers$: Observable<Customer[]>;
  customer: Customer;

  constructor(private customerService: CustomerService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.refresh();
  }

  onShift(direction: string){
    // this.customers$.subscribe(response => {
    //   this.customersShift = response;
    // })
    // let index = 0;
    // if (this.customer != null){
    //  index =  this.customersShift.indexOf(this.customer)
    // }
    //  if(index > 0 && direction === "left"){
    //    this.customer = this.customersShift[index - 1]
    //  }else if(index < this.customersShift.length - 1 && direction === "right") {
    //    this.customer = this.customersShift[index + 1]
    //  }
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
    this.customer = null;
    this.customers$ = this.customerService.getCustomers();
  }
}

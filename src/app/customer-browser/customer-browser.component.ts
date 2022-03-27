import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer, CustomerType} from "../Model/Customer";
import {CustomerDetailsComponent} from "../customer-details/customer-details.component";
import {CustomerService} from "../customer.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styles: [
  ]
})
export class CustomerBrowserComponent implements OnInit {

  @ViewChild(CustomerDetailsComponent) detailsComponent: CustomerDetailsComponent;

  customers: Customer[];
  customer: Customer;


  constructor(private customerService: CustomerService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.Refresh();
  }

  onShift(direction: string){
    const index = this.customers.indexOf(this.customer);
    if(index > 0 && direction === "left"){
      this.customer = this.customers[index - 1]
    }else if(index < this.customers.length - 1 && direction === "right") {
      this.customer = this.customers[index + 1]
    }
  }
  DeleteCustomer(){
    this.customerService.DeleteCustomer(this.customer).subscribe(
        () => {
          this.messageService.Sucess("Usunięto klienta")
          this.Refresh()},
        error => {
          console.log(error);
          this.messageService.Error("Błąd w połączeniu z serverem");
        }
    );
  }

  ChangeColor(){
    this.detailsComponent.ChangeColor()
  }

  Refresh(){
    this.customerService.GetCustomers().subscribe(response => {
      this.customers = response;
      this.customer = this.customers[0]
    })
  }
}

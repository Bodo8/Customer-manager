import {Inject, Injectable} from '@angular/core';
import {Customer, CustomerType} from "./Model/Customer";
import {CONFIG, Config} from "./Model/Config";
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(@Inject(CONFIG) private config: Config,
              private httpClient: HttpClient)
  { }

  GetCustomers() {
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}/customers`)
        .pipe(map(customers => customers.slice(0, this.config.customerLimit)));
  }

  CreateCustomer(customer: Customer) {
    return this.httpClient.post(`${this.config.apiUrl}/customers`, customer)
  }

  DeleteCustomer(customer: Customer) {
    return this.httpClient.delete(`${this.config.apiUrl}/customers/${customer.id}`)
  }
}

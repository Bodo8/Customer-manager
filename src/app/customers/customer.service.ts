import {Inject, Injectable} from '@angular/core';
import {Customer, CustomerType} from "./Model/customer";
import {CONFIG, Config} from "../core/config";
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(@Inject(CONFIG) private config: Config,
              private httpClient: HttpClient)
  { }

  getCustomers() {
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}/customers`)
        .pipe(map(customers => customers.slice(0, this.config.customerLimit)));
  }

  createCustomer(customer: Customer) {
    return this.httpClient.post(`${this.config.apiUrl}/customers`, customer)
  }

  deleteCustomer(customer: Customer) {
    return this.httpClient.delete(`${this.config.apiUrl}/customers/${customer.id}`)
  }
}

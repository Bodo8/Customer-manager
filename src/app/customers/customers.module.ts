import { NgModule } from '@angular/core';
import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerDetailsComponent} from "./customer-details/customer-details.component";
import {CustomerBrowserComponent} from "./customer-browser/customer-browser.component";
import {CustomerService} from "./customer.service";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";

const routes = [
    {path: 'customers', component: CustomerBrowserComponent},
    {path: 'customers/add', component: CustomerCreateComponent},
];

@NgModule({
  declarations: [
      CustomerCreateComponent,
      CustomerDetailsComponent,
      CustomerBrowserComponent
  ],
  providers: [
      CustomerService
  ],
  imports: [
      SharedModule,
      RouterModule.forChild(routes)
  ],
  exports: [
      CustomerCreateComponent,
      CustomerBrowserComponent
  ]
})
export class CustomersModule { }

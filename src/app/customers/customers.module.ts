import { NgModule } from '@angular/core';
import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerDetailsComponent} from "./customer-details/customer-details.component";
import {CustomerBrowserComponent} from "./customer-browser/customer-browser.component";
import {CustomerService} from "./customer.service";
import {SharedModule} from "../shared/shared.module";

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
      SharedModule
  ],
  exports: [
      CustomerCreateComponent,
      CustomerBrowserComponent
  ]
})
export class CustomersModule { }

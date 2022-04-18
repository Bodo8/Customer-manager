import { NgModule } from '@angular/core';
import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerDetailsComponent} from "./customer-details/customer-details.component";
import {CustomerBrowserComponent} from "./customer-browser/customer-browser.component";
import {CustomerService} from "./customer.service";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../core/auth-guard.service";
import {CustomerAddDeactivateGuard} from "./customer-add-deactivate-guard.service";

const routes = [
    {path: 'customers', component: CustomerBrowserComponent},
    {path: 'customers/add', component: CustomerCreateComponent, canActivate: [ AuthGuard],
        canDeactivate: [CustomerAddDeactivateGuard]},
];

@NgModule({
  declarations: [
      CustomerCreateComponent,
      CustomerDetailsComponent,
      CustomerBrowserComponent
  ],
  providers: [
      CustomerAddDeactivateGuard,
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

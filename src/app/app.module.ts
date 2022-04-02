import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ContractsModule} from "./contracts/contracts.module";
import {CustomersModule} from "./customers/customers.module";
import {CoreModuleApp} from "./core/core-module-app.module";
import {HttpClientModule} from "@angular/common/http";
import {CustomerBrowserComponent} from "./customers/customer-browser/customer-browser.component";
import {CustomerCreateComponent} from "./customers/customer-create/customer-create.component";
import {ContractListComponent} from "./contracts/contract-list/contract-list.component";

const routes: Routes = [
  {path: 'customers', component: CustomerBrowserComponent},
  {path: 'customers/add', component: CustomerCreateComponent},
  {path: 'contracts', component: ContractListComponent},
  {path: '', redirectTo: 'customers', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModuleApp,
    BrowserModule,
    AppRoutingModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule,
      RouterModule.forRoot(routes),
      HttpClientModule,
      ContractsModule,
      CustomersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

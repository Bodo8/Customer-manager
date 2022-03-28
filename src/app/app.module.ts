import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {CustomerService} from "./customer.service";
import {CONFIG, Config} from "./Model/Config";
import {ToastrModule} from "ngx-toastr";
import {MessageService} from "./message.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { CustomerCreateComponent } from './customer-create/customer-create.component';

const config: Config = {
  customerLimit: 3,
  apiUrl: 'http://localhost:13378'
}
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CustomerBrowserComponent,
    CustomerDetailsComponent,
    CustomerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule,
      HttpClientModule,
      
  ],
  providers: [
      CustomerService,
      {provide: CONFIG, useValue: config},
      MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

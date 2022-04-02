import { NgModule } from '@angular/core';
import {ErrorHandlingInterceptor} from "./error-handling.interceptor";
import {MessageService} from "./message.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {Config, CONFIG} from "./config";
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from "@angular/router";

const config: Config = {
  customerLimit: 3,
  apiUrl: 'http://localhost:13378'
};

@NgModule({
  imports: [RouterModule],
  providers: [
    {provide: CONFIG, useValue: config},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true },
      MessageService
  ],
  declarations: [ NavbarComponent],
exports: [ NavbarComponent]
})

export class CoreModuleApp { }

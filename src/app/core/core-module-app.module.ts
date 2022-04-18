import { NgModule } from '@angular/core';
import {ErrorHandlingInterceptor} from "./error-handling.interceptor";
import {MessageService} from "./message.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {Config, CONFIG} from "./config";
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuard} from "./auth-guard.service";
import {AuthService} from "./auth.service";
import {CommonModule} from "@angular/common";

const config: Config = {
  customerLimit: 3,
  apiUrl: 'http://localhost:13378'
};

@NgModule({
  imports: [RouterModule, CommonModule],
  providers: [
      AuthGuard,
      AuthService,
    {provide: CONFIG, useValue: config},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true },
      MessageService
  ],
  declarations: [ NavbarComponent, NotFoundComponent],
exports: [ NavbarComponent]
})

export class CoreModuleApp { }

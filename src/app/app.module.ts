import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CustomersModule} from "./customers/customers.module";
import {CoreModuleApp} from "./core/core-module-app.module";
import {HttpClientModule} from "@angular/common/http";
import {NotFoundComponent} from "./core/not-found/not-found.component";

const routes: Routes = [
  {path: 'contracts', loadChildren: () => import('./contracts/contracts.module')
        .then(mod => mod.ContractsModule)},
  {path: '', redirectTo: 'customers', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
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
      CustomersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { ContractListComponent } from './contract-list/contract-list.component';
import {ContractService} from "./contract.service";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import { ContractDetailsComponent } from './contract-details/contract-details.component';

const routes = [
  { path: 'contracts/:id', component: ContractDetailsComponent},
  { path: 'contracts', component: ContractListComponent}
];

@NgModule({
  declarations: [
    ContractListComponent,
    ContractDetailsComponent
  ],
  providers: [ContractService],
  exports: [
    ContractListComponent
  ],
  imports: [
    SharedModule,
      RouterModule.forChild(routes)
  ]
})
export class ContractsModule { }

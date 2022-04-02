import { Component, OnInit } from '@angular/core';
import {Contract} from "../model";
import {ContractService} from "../contract.service";

@Component({
  selector: 'ctr-contract-list',
  templateUrl: './contract-list.component.html',
  styles: [
  ]
})
export class ContractListComponent implements OnInit {

  contracts: Contract[];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.contractService.getContracts().subscribe(contracts =>{
      this.contracts = contracts;
    })
  }

}

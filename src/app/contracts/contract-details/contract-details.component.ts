import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContractService} from "../contract.service";
import {Contract} from "../model";

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styles: [
  ]
})
export class ContractDetailsComponent implements OnInit {

  contract: Contract;

  constructor(private  activatedRoute: ActivatedRoute,
              private contractService: ContractService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      const id = parseInt(params['id']);
      this.contractService.getContract(id).subscribe(contract => {
        this.contract = contract;
      }) ;
    })
  }

}

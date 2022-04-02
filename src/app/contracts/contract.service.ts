import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Config, CONFIG} from "../core/config";
import {Customer} from "../customers/Model/customer";
import {map} from "rxjs/operators";
import {Contract} from "./model";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(@Inject(CONFIG) private config: Config,
              private httpClient: HttpClient) { }

  getContracts() {
    return this.httpClient.get<Contract[]>(`${this.config.apiUrl}/contracts`);
  }
}

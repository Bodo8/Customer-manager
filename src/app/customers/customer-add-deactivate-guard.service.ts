import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerAddDeactivateGuard implements CanDeactivate<CustomerCreateComponent>{

  constructor() { }

  canDeactivate(component: CustomerCreateComponent, currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
      Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !(component.name || component.age || component.typeCust);
  }
}

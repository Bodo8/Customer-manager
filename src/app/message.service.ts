import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastrService: ToastrService) { };

  Sucess(message: string){
    this.toastrService.success(message);
  }

  Error(message: string){
    this.toastrService.error(message);
  }
}

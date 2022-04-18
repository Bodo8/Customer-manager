import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Customer, CustomerType} from "../Model/customer";
import {MessageService} from "../../core/message.service";

@Component({
  selector: 'cus-customer-details',
  templateUrl: './customer-details.component.html',
  styles: []
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, OnChanges {

  @Input() customer?: Customer;
  @Output() shift = new EventEmitter<string>();

  CustomerType = CustomerType;
  nameColor: string = "blue";
  isActive: boolean = true;
  showPhoto: boolean = true;
  counter: number = 0;
  counterHandle?: number;

  constructor(private messageService: MessageService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    }

  ngOnInit(): void {
    console.log('init')
    this.counterHandle = setInterval(() => { this.counter++; }, 1000);
  }

  ngOnDestroy(): void {
    console.log('destroy')
    clearInterval( this.counterHandle);
  }

  ChangeIsActive(){
    this.isActive = !this.isActive;
  }

  ChangeColor(){
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
    this.messageService.success('Zmieniono kolor!')
  }

  left(){
   this.shift.emit('prev')
  }

  right(){
   this.shift.emit('next')
  }


}

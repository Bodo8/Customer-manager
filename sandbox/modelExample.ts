import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//   <h1 [style.color]="nameColor" [class.isActive]="isActive">{{name}} </h1>
//   <img [src]="photoUrl" />
//   <button (click)="ChangeIsActive()" type="button">Przełącz podkreślenie</button>
//   <button (click)="ChangeColor()" type="button">Przełącz kolor</button>
//   <br />
//   <input type="text" [(ngModel)]="name" [ngModelOptions]="{updateOn: 'blur'}"/>
//   `,
//   styles: [
//     '.isActive { text-decoration: underline; }'
//   ]
// })
export class ModelExample {
  name: string = 'Customer-manager';
  photoUrl: string = "assets/images/miss.jpg";
  nameColor: string = "blue";
  isActive: boolean = true; 

  constructor() {}

  ChangeIsActive(){
    this.isActive = !this.isActive;
  }

  ChangeColor(){
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }
}

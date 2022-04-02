import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    '.isActive { text-decoration: underline; }'
  ]
})
export class AppComponent {

  isActive: boolean = true;
  constructor() {}


}

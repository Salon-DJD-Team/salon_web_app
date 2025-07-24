import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-v3',
  imports: [],
  templateUrl: './footer-v3.component.html',
})
export class FooterV3Component {

  // Current Year
  currentYear: number = new Date().getFullYear();
  
}

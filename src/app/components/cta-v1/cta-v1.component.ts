import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-v1',
  imports: [],
  templateUrl: './cta-v1.component.html',
})
export class CtaV1Component {

  sendMailTo() {
    window.location.href = 'mailto:contact@salondjd.sn';
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderV2Component } from "./layout/header-v2/header-v2.component";
import { FooterV3Component } from "./layout/footer-v3/footer-v3.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, HeaderV2Component, FooterV3Component],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'salon_web_app';
  currentHeader: string = 'v2';
  showLayout: boolean = true;
  currentFooter: string = 'v3';
}

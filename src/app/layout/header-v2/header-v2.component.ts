import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { CartSidebarComponent } from '../cart-sidebar/cart-sidebar.component';
import { NavigationComponent } from '../navigation/navigation.component';


@Component({
  selector: 'app-header-v2',
  imports: [
    NavigationComponent,
    CartSidebarComponent
  ],
  templateUrl: './header-v2.component.html',
})
export class HeaderV2Component {

}

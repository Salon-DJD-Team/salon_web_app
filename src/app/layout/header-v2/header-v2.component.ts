import { Component, HostListener, Renderer2, ElementRef, effect } from '@angular/core';
import { CartSidebarComponent } from '../cart-sidebar/cart-sidebar.component';
import { NgOptimizedImage, NgClass, CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { SocialNetwork } from '../../models/strapi.content.model';
import { socialNeworksContentSignal } from '../footer-v3/footer-v3.component';


export const CONTACT_SALON_EMAIL = 'contact@salondjd.sn';

@Component({
  selector: 'app-header-v2',
  imports: [
    NavigationComponent,
    CartSidebarComponent,
    NgOptimizedImage,
    CommonModule
],
  templateUrl: './header-v2.component.html',
})
export class HeaderV2Component {
  socialNetworks: SocialNetwork[] | null = [];
  constactDetails: {
    icon: string;
    text: string;
    type?: string;
  }[] = [
    { icon: 'fa fa-phone', text: '+221 78 455 70 17 | +221 78 469 50 49', type: 'phone' },
    { icon: 'fa fa-envelope', text: CONTACT_SALON_EMAIL, type: 'email' }
  ]
  constructor() {
    // Initialize any necessary data or services here
    effect(() => {
      // React to changes in signals if needed
      this.socialNetworks = socialNeworksContentSignal();
    });
  }
}

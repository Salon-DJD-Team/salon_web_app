import { Component, HostListener, Renderer2, ElementRef, effect } from '@angular/core';
import { CartSidebarComponent } from '../cart-sidebar/cart-sidebar.component';
import { NgOptimizedImage } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { SocialNetwork } from '../../models/strapi.content.model';
import { socialNeworksContentSignal } from '../footer-v3/footer-v3.component';


@Component({
  selector: 'app-header-v2',
  imports: [
    NavigationComponent,
    CartSidebarComponent,
    NgOptimizedImage
  ],
  templateUrl: './header-v2.component.html',
})
export class HeaderV2Component {
  socialNetworks: SocialNetwork[] | null = [];
  constructor() {
    // Initialize any necessary data or services here
    effect(() => {
      // React to changes in signals if needed
      this.socialNetworks = socialNeworksContentSignal();
    });
  }
}

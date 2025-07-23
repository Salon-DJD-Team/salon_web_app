import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-sidebar',
  imports: [CommonModule],
  templateUrl: './cart-sidebar.component.html',
})
export class CartSidebarComponent {

  products = [
    {
      name: 'BCI Boot Sensor',
      image: 'assets/images/resource/products/4.jpg',
      price: '$20.00',
      rating: 5,
      slug: 'bci-boot-sensor'
    },
    {
      name: 'Safety Masks',
      image: 'assets/images/resource/products/5.jpg',
      price: '$15.00',
      rating: 4,
      slug: 'safety-masks'
    },
    {
      name: 'Digital Weight',
      image: 'assets/images/resource/products/6.jpg',
      price: '$18.00',
      rating: 4,
      slug: 'digital-weight'
    },
  ];

}

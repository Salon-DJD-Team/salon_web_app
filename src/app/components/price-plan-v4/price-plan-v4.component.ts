import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-price-plan-v4',
  imports: [CommonModule],
  templateUrl: './price-plan-v4.component.html',
})
export class PricePlanV4Component {

  pricing = [
    {
      title: 'Start Plan',
      icon: 'flaticon-hand-shake',
      price: 39,
      tickets: '10 Tickets Available',
      features: [
        'Free T-Shirt Pen & pad',
        'Free Coffee/Desert',
        'Three Days Access',
        'Entrance Workshop',
        'Free Lunch'
      ],
      animation: 'fadeInLeft',
      button_name: 'Buy Now',
      button_link: '#'
    },
    {
      title: 'Premium Plan',
      icon: 'flaticon-hand-shake',
      price: 69,
      tickets: '100 Tickets Available',
      features: [
        'Free T-Shirt Pen & pad',
        'Free Coffee/Desert',
        'Three Days Access',
        'Entrance Workshop',
        'Free Lunch'
      ],
      animation: 'fadeInUp',
      button_name: 'Buy Now',
      button_link: '#'
    },
    {
      title: 'Gold Plan',
      icon: 'flaticon-hand-shake',
      price: 99,
      tickets: '300 Tickets Available',
      features: [
        'Free T-Shirt Pen & pad',
        'Free Coffee/Desert',
        'Three Days Access',
        'Entrance Workshop',
        'Free Lunch'
      ],
      animation: 'fadeInRight',
      button_name: 'Buy Now',
      button_link: '#'
    },
  ];

}

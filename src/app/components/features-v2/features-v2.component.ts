import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-v2',
  imports: [CommonModule],
  templateUrl: './features-v2.component.html',
})
export class FeaturesV2Component {

  features = [
    {
      icon: 'assets/images/icons/event-icon-1.png',
      title: 'Meet the leaders',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: 'meet-the-leaders'
    },
    {
      icon: 'assets/images/icons/event-icon-2.png',
      title: 'Five Days Long',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: 'five-days-long'
    },
    {
      icon: 'assets/images/icons/event-icon-3.png',
      title: 'Product Launching',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: 'product-launching'
    },
    {
      icon: 'assets/images/icons/event-icon-4.png',
      title: '37+ Sponsors',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: '37-sponsors'
    },
    {
      icon: 'assets/images/icons/event-icon-5.png',
      title: '92+ Countries Attend',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: '92-countries-attend'
    },
    {
      icon: 'assets/images/icons/event-icon-6.png',
      title: 'Ask Questions',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: 'ask-questions'
    }
  ];

}

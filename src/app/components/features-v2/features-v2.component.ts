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
      title: 'AGRO BUSINESS ',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: 'meet-the-leaders'
    },
    {
      icon: 'assets/images/icons/event-icon-2.png',
      title: 'INDUSTRIES AGRO.',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: 'five-days-long'
    },
    {
      icon: 'assets/images/icons/event-icon-3.png',
      title: 'COMMERCE',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: 'product-launching'
    },
    {
      icon: 'assets/images/icons/event-icon-4.png',
      title: 'TELECOM & DIGITAL',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: '37-sponsors'
    },
    {
      icon: 'assets/images/icons/event-icon-5.png',
      title: 'BTP & CIMENTERIE',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: '92-countries-attend'
    },
    {
      icon: 'assets/images/icons/event-icon-6.png',
      title: 'BANQUES & ASSURANCES',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: 'ask-questions'
    },

    {
      icon: 'assets/images/icons/event-icon-1.png',
      title: 'TRANSPORT & LOG.',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: 'meet-the-leaders'
    },
    {
      icon: 'assets/images/icons/event-icon-2.png',
      title: 'SANTE & PHARMA',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: 'five-days-long'
    },
    {
      icon: 'assets/images/icons/event-icon-3.png',
      title: 'EAU & ASSAINISSEMENT',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: 'product-launching'
    },
    {
      icon: 'assets/images/icons/event-icon-4.png',
      title: 'ENERGIES & MINES ',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: '37-sponsors'
    },
    {
      icon: 'assets/images/icons/event-icon-5.png',
      title: 'HOTELLERIE, RESTAURATION & COMMERCE',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: '92-countries-attend'
    },
    {
      icon: 'assets/images/icons/event-icon-6.png',
      title: 'SERVICES AUX ENTREPRISES',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      slug: 'ask-questions'
    }
  ];

}

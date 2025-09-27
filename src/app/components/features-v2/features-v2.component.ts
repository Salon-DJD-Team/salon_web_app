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
      slug: 'meet-the-leaders'
    },
    {
      icon: 'assets/images/icons/event-icon-2.png',
      title: 'INDUSTRIES AGRO.',
      slug: 'five-days-long'
    },
    {
      icon: 'assets/images/icons/event-icon-3.png',
      title: 'COMMERCE',
      slug: 'product-launching'
    },
    {
      icon: 'assets/images/icons/event-icon-4.png',
      title: 'TELECOM & DIGITAL',
      slug: '37-sponsors'
    },
    {
      icon: 'assets/images/icons/event-icon-5.png',
      title: 'BTP & CIMENTERIE',
      slug: '92-countries-attend'
    },
    {
      icon: 'assets/images/icons/event-icon-6.png',
      title: 'BANQUES & ASSURANCES',
      slug: 'ask-questions'
    },

    {
      icon: 'assets/images/icons/event-icon-1.png',
      title: 'TRANSPORT & LOG.',
      slug: 'meet-the-leaders'
    },
    {
      icon: 'assets/images/icons/event-icon-2.png',
      title: 'SANTE & PHARMA',
      slug: 'five-days-long'
    },
    {
      icon: 'assets/images/icons/event-icon-3.png',
      title: 'EAU & ASSAINISSEMENT',
      slug: 'product-launching'
    },
    {
      icon: 'assets/images/icons/event-icon-4.png',
      title: 'ENERGIES & MINES ',
      slug: '37-sponsors'
    },
    {
      icon: 'assets/images/icons/event-icon-5.png',
      title: 'HOTELLERIE, RESTAURATION & COMMERCE',
      slug: '92-countries-attend'
    },
    {
      icon: 'assets/images/icons/event-icon-6.png',
      title: 'SERVICES AUX ENTREPRISES',
      slug: 'ask-questions'
    }
  ];

}

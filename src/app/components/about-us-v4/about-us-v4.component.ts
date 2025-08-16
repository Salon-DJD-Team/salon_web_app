import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-about-us-v4',
  imports: [CarouselModule],
  templateUrl: './about-us-v4.component.html'
})
export class AboutUsV4Component {
  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  slides: { image: string; title: string; description: string }[] = [
    {
      image:
        'https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg',
      title: 'Salon Job Dating Dakar 2025',
      description: 'Description for Salon Job Dating Dakar 2025',
    },
    {
      image:
        'https://primefaces.org/cdn/primeng/images/demo/product/blue-t-shirt.jpg',
      title: "Venez découvrir les opportunités d'emploi",
      description: "Description for Venez découvrir les opportunités d'emploi",
    },
    {
      image:
        'https://primefaces.org/cdn/primeng/images/demo/product/blue-band.jpg',
      title: 'Black Watch',
      description: 'Description for Black Watch',
    },
    {
      image:
        'https://primefaces.org/cdn/primeng/images/demo/product/bracelet.jpg',
      title: 'Bracelet',
      description: 'Description for Bracelet',
    },
  ];
  constructor() {}
}

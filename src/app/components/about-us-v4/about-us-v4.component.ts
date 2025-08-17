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
  slides: { image: string; title: string; description: string }[] = [
    {
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      title: 'Rencontres Professionnelles 2025',
      description: 'Participez à notre événement annuel pour rencontrer des employeurs et découvrir de nouvelles opportunités de carrière.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1515168833906-d2a3b82b1a5e?auto=format&fit=crop&w=600&q=80',
      title: "Forum de l'Emploi et de l'Innovation",
      description: "Un espace dédié à l'échange entre candidats et entreprises innovantes du secteur technologique.",
    },
    {
      image:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      title: 'Atelier Développement Personnel',
      description: 'Des ateliers interactifs pour améliorer vos compétences et booster votre carrière.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      title: 'Conférence Leadership et Management',
      description: 'Rejoignez des experts pour discuter des dernières tendances en management et leadership.',
    },
  ];
  constructor() {}
}

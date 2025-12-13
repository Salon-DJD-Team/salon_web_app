import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { StrapiJobPostsContentModel } from '../../models/strapi.content.model';
import { DisplayMediaFromStrapiPipe } from '../../pipes/display-image-from-strapi/display-media-from-strapi.pipe';

@Component({
  selector: 'app-job-posts-section-v2',
  imports: [CommonModule, Carousel, DisplayMediaFromStrapiPipe],
  templateUrl: './job-posts-section-v2.component.html',
  styleUrl: './job-posts-section-v2.component.scss',
})
export class JobPostsSectionV2Component {
  content = input<StrapiJobPostsContentModel | null>(null);
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  jobPosts = [
    {
      title: 'Product Manager',
      company: 'Institut Pasteur de Dakar',
      description: 'Nous recherchons un Product Manager expérimenté pour diriger le développement de nos solutions de santé digitale. Vous serez responsable de la stratégie produit, de la coordination des équipes techniques et de l\'analyse des besoins utilisateurs.',
      location: 'Dakar, Sénégal',
      type: 'CDI',
      companyLogo: 'assets/images/resource/author-1.jpg',
      requirements: ['5+ ans d\'expérience en gestion de produit', 'Maîtrise des méthodologies Agile', 'Formation en ingénierie ou business'],
      postedDate: '2024-01-15',
      externalLink: 'https://www.pasteur.sn/careers',
    },
    {
      title: 'Digital Marketing Manager',
      company: 'Orange Digital Center',
      description: 'Rejoignez notre équipe pour développer et exécuter des stratégies marketing digitales innovantes. Vous piloterez les campagnes multi-canaux et optimiserez la présence en ligne de nos programmes de formation.',
      location: 'Dakar, Sénégal',
      type: 'CDI',
      companyLogo: 'assets/images/resource/author-2.jpg',
      requirements: ['3+ ans en marketing digital', 'Expertise en SEO/SEM', 'Maîtrise des outils analytics'],
      postedDate: '2024-01-12',
      externalLink: 'https://www.orangedigitalcenters.com/careers',
    },
    {
      title: 'Business Developer',
      company: 'SGBS Bank',
      description: 'Développez notre portefeuille client corporate et identifiez de nouvelles opportunités de croissance. Vous serez en charge de la prospection, de la négociation et du suivi des partenariats stratégiques.',
      location: 'Dakar, Sénégal',
      type: 'CDI',
      companyLogo: 'assets/images/resource/author-1.jpg',
      requirements: ['Formation en commerce/finance', 'Expérience en développement commercial', 'Excellent relationnel'],
      postedDate: '2024-01-10',
      externalLink: 'https://www.sgbs.sn/careers',
    },
    {
      title: 'Data Analyst',
      company: 'Petrosen',
      description: 'Analysez les données pétrolières et gazières pour optimiser nos opérations. Vous créerez des tableaux de bord, effectuerez des analyses prédictives et fournirez des insights stratégiques à la direction.',
      location: 'Dakar, Sénégal',
      type: 'CDI',
      salary: '750 000 - 1 100 000 FCFA',
      companyLogo: 'assets/images/resource/author-1.jpg',
      requirements: ['Maîtrise de Python/R', 'Expérience en visualisation de données', 'Connaissance du secteur énergétique'],
      postedDate: '2024-01-08',
      externalLink: 'https://www.petrosen.sn/careers',
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-v1',
  imports: [CommonModule],
  templateUrl: './services-v1.component.html',
})
export class ServicesV1Component {

  services = [
    {
      icon: 'flaticon-connection',
      title: 'Espace Institutionnel',
      description: 'Rencontrez les agences et organismes de l’Etat qui œuvrent dans la promotion de l’emploi, des RH et des Métiers (…).',
      slug: 'networking'
    },
    {
      icon: 'flaticon-book',
      title: 'Espace Entrepreneuriat',
      description: 'Retrouvez les plus grandes structures publiques et privées d’appui à l’entrepreneuriat : appui technique, financement, formation, diaspora (…).',
      slug: 'learning'
    },
    {
      icon: 'flaticon-idea',
      title: 'Espace International',
      description: 'Venez échanger avec les grands partenaires internationaux et employeurs de la sous-région pour explorer des perspectives de partenariat (…).',
      slug: 'spark-new-ideas'
    },
     {
      icon: 'flaticon-book',
      title: 'Espace Employeurs',
      description: 'Entrez en contact dans les stands avec les recruteurs et dirigeants des plus grandes entreprises du pays parmi les 10 plus gros secteurs d’activité (…).',
      slug: 'learning'
    },
  ];

  getAnimationClass(index: number): string {
    // Cycle animations if needed
    return ['fadeInLeft', 'fadeInRight', 'fadeInUp'][index % 3];
  }

}

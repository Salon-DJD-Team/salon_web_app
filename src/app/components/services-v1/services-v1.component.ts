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
      description: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor.',
      slug: 'networking'
    },
    {
      icon: 'flaticon-book',
      title: 'Espace Entrepreneuriat',
      description: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor.',
      slug: 'learning'
    },
    {
      icon: 'flaticon-idea',
      title: 'Espace International',
      description: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor.',
      slug: 'spark-new-ideas'
    },
     {
      icon: 'flaticon-book',
      title: 'Espace Employeurs',
      description: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor.',
      slug: 'learning'
    },
  ];

  getAnimationClass(index: number): string {
    // Cycle animations if needed
    return ['fadeInLeft', 'fadeInRight', 'fadeInUp'][index % 3];
  }

}

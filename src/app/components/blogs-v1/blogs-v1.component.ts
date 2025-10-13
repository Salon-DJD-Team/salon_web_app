import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrapiNewsletterContentModel } from '../../models/strapi.content.model';
import { DisplayMediaFromStrapiPipe } from '../../pipes/display-image-from-strapi/display-media-from-strapi.pipe';

@Component({
  selector: 'app-blogs-v1',
  standalone: true,
  imports: [CommonModule, DisplayMediaFromStrapiPipe],
  templateUrl: './blogs-v1.component.html',
})
export class BlogsV1Component {
  content = input<StrapiNewsletterContentModel | null>(null);
  articles: {
    id: number;
    title: string;
    date: string;
    author: string;
    comments: number;
    image: string;
    category: string;
    slug: string;
   }[] = [
    // {
    //   id: 1,
    //   title: "How to succeed in the digital world",
    //   date: "2024-05-02",
    //   author: "Christine",
    //   comments: 3,
    //   image: "assets/images/resource/news-1.jpg",
    //   category: "Event",
    //   slug: "international-conference-on-art-business"
    // },
    // {
    //   id: 2,
    //   title: "What is a job dating event?",
    //   date: "2024-05-02",
    //   author: "Christine",
    //   comments: 3,
    //   image: "assets/images/resource/news-2.jpg",
    //   category: "Event",
    //   slug: "unique-digital-ideas-to-learn-business"
    // }
  ];

}

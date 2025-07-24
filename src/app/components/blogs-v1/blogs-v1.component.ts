import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs-v1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs-v1.component.html',
})
export class BlogsV1Component {
  articles = [
    {
      id: 1,
      title: "International Conference on Art Business",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-1.jpg",
      category: "Event",
      slug: "international-conference-on-art-business"
    },
    {
      id: 2,
      title: "Unique Digital Ideas to Learn Business",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-2.jpg",
      category: "Event",
      slug: "unique-digital-ideas-to-learn-business"
    },
    {
      id: 3,
      title: "Houston Event Planning Management",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-3.jpg",
      category: "Event",
      slug: "houston-event-planning-management"
    }
  ];
  
}
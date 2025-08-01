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
      title: "How to successed in the digital world",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-1.jpg",
      category: "Event",
      slug: "international-conference-on-art-business"
    },
    {
      id: 2,
      title: "What is a job dating event?",
      date: "2024-05-02",
      author: "Christine",
      comments: 3,
      image: "assets/images/resource/news-2.jpg",
      category: "Event",
      slug: "unique-digital-ideas-to-learn-business"
    }
  ];

}

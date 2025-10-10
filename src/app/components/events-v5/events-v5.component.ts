import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var jQuery: any;
declare var tab_box: any;

@Component({
  selector: 'app-events-v5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-v5.component.html',
})
export class EventsV5Component implements AfterViewInit {
  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function () {
        tab_box();
      }, 100);
    })(jQuery);
  }

  tabs: {
    id: string;
    day: string;
    date: string;
    month: string;
    year: string;
    active: boolean;
    events: {
      authorImage: string;
      authorName?: string;
      authorDesignation: string;
      eventDate: string;
      eventTitle: string;
      eventDescription: string;
      eventLocation: string;
      eventTime: string;
      link: string;
    }[];
  }[] = [
    {
      id: 'tab-1',
      day: 'Day 01',
      date: '17',
      month: 'Dec',
      year: '2025',
      active: true,
      events: [
        // {
        //   authorImage: 'assets/images/resource/author-15.png',
        //   // authorName: 'John Smith',
        //   authorDesignation: '',
        //   eventDate: '17 Decembre',
        //   eventTitle: '...',
        //   eventDescription: 'Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.',
        //   eventLocation: 'Grand Théâtre de Dakar, Dakar/Senegal',
        //   eventTime: '17 Decembre 2025, 10:00 AM-6:00 PM',
        //   link: 'the-future-of-ux-ui-in-2025'
        // },
        // {
        //   authorImage: 'assets/images/resource/author-16.png',
        //   authorName: 'William Sam',
        //   authorDesignation: 'Developer',
        //   eventDate: '15 April',
        //   eventTitle: 'Introduction to Artificial Intelligence',
        //   eventDescription: 'Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.',
        //   eventLocation: 'TechX Park, NY, New York',
        //   eventTime: '14 April 2025, 10:00 AM-6:00 PM',
        //   link: 'introduction-to-artificial-intelligence'
        // },
        // {
        //   authorImage: 'assets/images/resource/author-17.jpg',
        //   authorName: 'William Sam',
        //   authorDesignation: 'Developer',
        //   eventDate: '15 April',
        //   eventTitle: 'Launch of DinTalk - A social Media App',
        //   eventDescription: 'Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.',
        //   eventLocation: 'TechX Park, NY, New York',
        //   eventTime: '14 April 2025, 10:00 AM-6:00 PM',
        //   link: 'launch-of-dintalk-a-social-media-app'
        // }
      ],
    },
    {
      id: 'tab-2',
      day: 'Day 02',
      date: '18',
      month: 'Dec',
      year: '2025',
      active: false,
      events: [
        // {
        //   authorImage: 'assets/images/resource/author-15.png',
        //   // authorName: 'Sarah Johnson',
        //   authorDesignation: '...',
        //   eventDate: '18 Decembre',
        //   eventTitle: '...',
        //   eventDescription: '...',
        //   eventLocation: 'Grand Théâtre de Dakar, Dakar/Senegal',
        //   eventTime: '18 Decembre 2025, 9:00 AM-5:00 PM',
        //   link: 'big-data-analytics-workshop'
        // },
        // {
        //   authorImage: 'assets/images/resource/author-16.png',
        //   authorName: '...',
        //   authorDesignation: '...',
        //   eventDate: '18 Decembre',
        //   eventTitle: '...',
        //   eventDescription: '...',
        //   eventLocation: 'Grand Théâtre de Dakar, Dakar/Senegal',
        //   eventTime: '18 Decembre 2025, 11:00 AM-1:00 PM',
        //   link: 'cloud-native-applications'
        // },
      ],
    },
  ];

  activeTab = this.tabs[0].id;
}

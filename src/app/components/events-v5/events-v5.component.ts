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
		setTimeout(function(){
			tab_box();
		  }, 100);
	  })(jQuery);
  }

  tabs = [
    {
      id: 'tab-1',
      day: 'Day 01',
      date: '01',
      month: 'Jan',
      year: '2025',
      active: true,
      events: [
        {
          authorImage: 'assets/images/resource/author-15.png',
          authorName: 'John Smith',
          authorDesignation: 'Ux/Ui Designer',
          eventDate: '15 April',
          eventTitle: 'The future of Ux/Ui in 2025',
          eventDescription: 'Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.',
          eventLocation: 'TechX Park, NY, New York',
          eventTime: '14 April 2025, 10:00 AM-6:00 PM',
          link: 'the-future-of-ux-ui-in-2025'
        },
        {
          authorImage: 'assets/images/resource/author-16.png',
          authorName: 'William Sam',
          authorDesignation: 'Developer',
          eventDate: '15 April',
          eventTitle: 'Introduction to Artificial Intelligence',
          eventDescription: 'Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.',
          eventLocation: 'TechX Park, NY, New York',
          eventTime: '14 April 2025, 10:00 AM-6:00 PM',
          link: 'introduction-to-artificial-intelligence'
        },
        {
          authorImage: 'assets/images/resource/author-17.jpg',
          authorName: 'William Sam',
          authorDesignation: 'Developer',
          eventDate: '15 April',
          eventTitle: 'Launch of DinTalk - A social Media App',
          eventDescription: 'Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.',
          eventLocation: 'TechX Park, NY, New York',
          eventTime: '14 April 2025, 10:00 AM-6:00 PM',
          link: 'launch-of-dintalk-a-social-media-app'
        }
      ]
    },
    {
      id: 'tab-2',
      day: 'Day 02',
      date: '02',
      month: 'Jan',
      year: '2025',
      active: false,
      events: [
        {
          authorImage: 'assets/images/resource/author-15.png',
          authorName: 'Sarah Johnson',
          authorDesignation: 'Data Scientist',
          eventDate: '16 April',
          eventTitle: 'Big Data Analytics Workshop',
          eventDescription: 'Learn advanced techniques for processing and analyzing large datasets efficiently.',
          eventLocation: 'Data Hall, Convention Center',
          eventTime: '15 April 2025, 9:00 AM-5:00 PM',
          link: 'big-data-analytics-workshop'
        },
        {
          authorImage: 'assets/images/resource/author-16.png',
          authorName: 'Michael Chen',
          authorDesignation: 'Cloud Architect',
          eventDate: '16 April',
          eventTitle: 'Cloud Native Applications',
          eventDescription: 'Building scalable applications using modern cloud technologies.',
          eventLocation: 'Cloud Pavilion, TechX Park',
          eventTime: '15 April 2025, 11:00 AM-1:00 PM',
          link: 'cloud-native-applications'
        },
        {
          authorImage: 'assets/images/resource/author-17.jpg',
          authorName: 'Emma Wilson',
          authorDesignation: 'Cybersecurity Expert',
          eventDate: '16 April',
          eventTitle: 'Securing Modern Web Applications',
          eventDescription: 'Best practices for protecting your applications from modern threats.',
          eventLocation: 'Security Theater, Main Hall',
          eventTime: '15 April 2025, 2:00 PM-4:00 PM',
          link: 'securing-modern-web-applications'
        }
      ]
    },
    {
      id: 'tab-3',
      day: 'Day 03',
      date: '03',
      month: 'Jan',
      year: '2025',
      active: false,
      events: [
        {
          authorImage: 'assets/images/resource/author-15.png',
          authorName: 'David Rodriguez',
          authorDesignation: 'Blockchain Developer',
          eventDate: '17 April',
          eventTitle: 'Introduction to Web3',
          eventDescription: 'Understanding the fundamentals of decentralized applications.',
          eventLocation: 'Blockchain Hub, Innovation Center',
          eventTime: '16 April 2025, 10:00 AM-12:00 PM',
          link: 'introduction-to-web3'
        },
        {
          authorImage: 'assets/images/resource/author-16.png',
          authorName: 'Lisa Wong',
          authorDesignation: 'Product Manager',
          eventDate: '17 April',
          eventTitle: 'Agile Product Development',
          eventDescription: 'Strategies for successful product management in agile environments.',
          eventLocation: 'Product Management Room, North Wing',
          eventTime: '16 April 2025, 1:00 PM-3:00 PM',
          link: 'agile-product-development'
        },
        {
          authorImage: 'assets/images/resource/author-17.jpg',
          authorName: 'Robert Taylor',
          authorDesignation: 'DevOps Engineer',
          eventDate: '17 April',
          eventTitle: 'CI/CD Pipelines with Kubernetes',
          eventDescription: 'Implementing robust deployment pipelines for containerized applications.',
          eventLocation: 'DevOps Lab, TechX Park',
          eventTime: '16 April 2025, 4:00 PM-6:00 PM',
          link: 'ci-cd-pipelines-with-kubernetes'
        }
      ]
    },
    {
      id: 'tab-4',
      day: 'Day 04',
      date: '04',
      month: 'Jan',
      year: '2025',
      active: false,
      events: [
        {
          authorImage: 'assets/images/resource/author-15.png',
          authorName: 'Jennifer Lee',
          authorDesignation: 'AI Researcher',
          eventDate: '18 April',
          eventTitle: 'Ethical AI Development',
          eventDescription: 'Addressing bias and ethical considerations in artificial intelligence.',
          eventLocation: 'AI Ethics Forum, Main Hall',
          eventTime: '17 April 2025, 9:30 AM-11:30 AM',
          link: 'ethical-ai-development'
        },
        {
          authorImage: 'assets/images/resource/author-16.png',
          authorName: 'Thomas Brown',
          authorDesignation: 'Frontend Architect',
          eventDate: '18 April',
          eventTitle: 'Advanced Angular Patterns',
          eventDescription: 'Architecting large-scale Angular applications with best practices.',
          eventLocation: 'Web Development Theater',
          eventTime: '17 April 2025, 12:30 PM-2:30 PM',
          link: 'advanced-angular-patterns'
        },
        {
          authorImage: 'assets/images/resource/author-17.jpg',
          authorName: 'Olivia Martinez',
          authorDesignation: 'UX Researcher',
          eventDate: '18 April',
          eventTitle: 'User-Centered Design Workshop',
          eventDescription: 'Practical techniques for understanding and designing for user needs.',
          eventLocation: 'UX Lab, Design Center',
          eventTime: '17 April 2025, 3:30 PM-5:30 PM',
          link: 'user-centered-design-workshop'
        }
      ]
    },
    {
      id: 'tab-5',
      day: 'Day 05',
      date: '05',
      month: 'Jan',
      year: '2025',
      active: false,
      events: [
        {
          authorImage: 'assets/images/resource/author-15.png',
          authorName: 'Daniel Kim',
          authorDesignation: 'CTO',
          eventDate: '19 April',
          eventTitle: 'Tech Leadership Panel',
          eventDescription: 'Industry leaders discuss the future of technology leadership.',
          eventLocation: 'Main Auditorium',
          eventTime: '18 April 2025, 10:00 AM-12:00 PM',
          link: 'tech-leadership-panel'
        },
        {
          authorImage: 'assets/images/resource/author-16.png',
          authorName: 'Sophia Garcia',
          authorDesignation: 'Data Visualization Expert',
          eventDate: '19 April',
          eventTitle: 'Storytelling with Data',
          eventDescription: 'Creating compelling narratives through effective data visualization.',
          eventLocation: 'Data Visualization Studio',
          eventTime: '18 April 2025, 1:00 PM-3:00 PM',
          link: 'storytelling-with-data'
        },
        {
          authorImage: 'assets/images/resource/author-17.jpg',
          authorName: 'James Wilson',
          authorDesignation: 'Startup Founder',
          eventDate: '19 April',
          eventTitle: 'From Idea to IPO',
          eventDescription: 'Lessons learned in building and scaling a successful tech startup.',
          eventLocation: 'Entrepreneurship Hall',
          eventTime: '18 April 2025, 4:00 PM-6:00 PM',
          link: 'from-idea-to-ipo'
        }
      ]
    }
  ];

  activeTab = this.tabs[0].id;
}
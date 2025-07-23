import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams-v4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams-v4.component.html',
})
export class TeamsV4Component {
  teams = [
    {
      name: "John Fedrick",
      designation: "Creative Director",
      image: "assets/images/resource/team-7.jpg",
      slug: "john-fedrick",
      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    },
    {
      name: "Stella Flora",
      designation: "Art Director & CEO",
      image: "assets/images/resource/team-8.jpg",
      slug: "stella-flora",
      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    },
    {
      name: "William Joe",
      designation: "UI/UX Designer",
      image: "assets/images/resource/team-9.jpg",
      slug: "william-joe",
      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    },
    {
      name: "Erick Rowan",
      designation: "PHP Developer",
      image: "assets/images/resource/team-10.jpg",
      slug: "erick-rowan",
      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    },
    {
      name: "John Smith",
      designation: "Ux/Ui Designer",
      image: "assets/images/resource/team-11.jpg",
      slug: "john-smith",
      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    },
    {
      name: "William Sam",
      designation: "Developer",
      image: "assets/images/resource/team-12.jpg",
      slug: "william-sam",
      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    },
    {
      name: "Jan Baier",
      designation: "CEO DinTalk",
      image: "assets/images/resource/team-13.jpg",
      slug: "jan-baier",
      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    },
    {
      name: "James Bob",
      designation: "UI/UX Designer",
      image: "assets/images/resource/team-14.jpg",
      slug: "james-bob",
      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/"
      }
    }
  ];

}
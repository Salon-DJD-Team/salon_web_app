import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners-v1',
  imports: [CommonModule],
  templateUrl: './partners-v1.component.html',
})
export class PartnersV1Component {
  partners = [
    {
      image: "assets/images/clients/1.png",
      url: '#',
    },
    {
      image: "assets/images/clients/2.png",
      url: '#',
    },
    {
      image: "assets/images/clients/3.png",
      url: '#',
    },
    {
      image: "assets/images/clients/4.png",
      url: '#',
    },
    {
      image: "assets/images/clients/5.png",
      url: '#',
    },
    {
      image: "assets/images/clients/6.png",
      url: '#',
    },
    {
      image: "assets/images/clients/7.png",
      url: '#',
    },
    {
      image: "assets/images/clients/8.png",
      url: '#',
    },
  ];
}

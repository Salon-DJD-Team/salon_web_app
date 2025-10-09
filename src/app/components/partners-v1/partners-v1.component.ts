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
      image: "assets/images/partners/logo-anpej.jpeg",
      url: '#',
    },
    {
      image: "assets/images/partners/logo-cellule.jpeg",
      url: '#',
    },
    {
      image: "assets/images/partners/logo-connectic.jpeg",
      url: '#',
    },
    {
      image: "assets/images/partners/logo-faise.jpeg",
      url: '#',
    },
    {
      image: "assets/images/partners/logo-ministere-emploi-formation-professionnelle.jpeg",
      url: '#',
    },
    {
      image: "assets/images/partners/logo-nomade.jpeg",
      url: '#',
    },
    {
      image: "assets/images/partners/logo-rts.jpeg",
      url: '#',
    },
    {
      image: "assets/images/partners/logo_Adepme.jpeg",
      url: '#',
    },
    {
      image: "assets/images/partners/logo_anamo.jpeg",
      url: '#',
    },
    {
      image: "assets/images/partners/logo_grand_theatre.jpeg",
      url: '#',
    },
  ];
}

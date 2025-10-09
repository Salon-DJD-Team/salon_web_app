import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
  go?: () => void;
}

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements AfterViewInit {
  menuItems: MenuItem[] = [
    {
      label: 'DJD 2025',
      href: '#',
      children: [
        {
          label: '4 Espaces Pavillons',
          href: '#pavillions',
          go: () => {
            this.scrollToSection('pavillions');
          }
        },
        {
          label: 'HCP',
          href: '#about',
        },
        {
          label: 'Sponsors & Partenaires',
          href: '#about',
        },
        {
          label: 'Media Partners',
          href: '#about',
        },
      ],
    },
    {
      label: 'Emploi',
      href: '#',
      children: [
        {
          label: 'Inscription',
          go: () => {
            this.scrollToSection('registerJobSeeker');
          },
        },
        {
          label: 'Sponsors & Employeurs',
          href: '#sponsors',
        },
        {
          label: 'Programme & Speakers',
          href: '#program',
        },
      ],
    },
    {
      label: 'Entrepreneuriat',
      href: '#entrepreneuriat',
      children: [
        {
          label: 'Inscription',
          go: () => {
            this.scrollToSection('registerBusiness');
          },
        },
        {
          label: 'Sponsors & Exposants',
          href: '#sponsors',
        },
        {
          label: 'Programme & Speakers',
          href: '#program',
        },

      ]
    },
    {
       label: 'Contact',
       href: '#contact',
    },
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const dropdownLinks: NodeListOf<HTMLAnchorElement> =
      this.el.nativeElement.querySelectorAll('.navigation li.dropdown > a');

    dropdownLinks.forEach((link: HTMLAnchorElement) => {
      const href = link.getAttribute('href');
      if (href === '#') {
        link.addEventListener('click', (e) => {
          e.preventDefault(); // prevent the default navigation
        });
      }
    });
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    console.log(sectionId, section);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

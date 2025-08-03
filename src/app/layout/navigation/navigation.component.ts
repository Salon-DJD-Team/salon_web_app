import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
  go?: () => void | undefined;
}

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements AfterViewInit {
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'A propos',
      href: '#about',
    },
    {
      label: 'Inscriptions',
      href: '#',
      children: [
        {
          label: 'Candidat',
          go: () => {
            this.scrollToSection('registerJobSeeker');
          },
        },
        {
          label: 'Employeur',
          go: () => {
            this.scrollToSection('registerBusiness');
          },
        },
      ],
    },
    {
      label: 'Programme',
      href: '#program',
    },
    {
       label: 'Contactez-nous',
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
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

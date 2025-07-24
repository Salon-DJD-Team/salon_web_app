import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements AfterViewInit {
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
}
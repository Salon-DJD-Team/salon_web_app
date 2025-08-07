import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var jQuery: any;
declare var main_slider: any;

@Component({
  selector: 'app-slider-v1',
  imports: [CommonModule],
  templateUrl: './slider-v1.component.html',
})
export class SliderV1Component implements AfterViewInit {

  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			main_slider();
		  }, 100);
	  })(jQuery);
  }

  slides = [
    {
      date: 'December 17, 2025',
      title: 'Salon Job Dating Dakar 2025',
      location: 'Grand Théâtre de Dakar',
      image: 'assets/images/main-slider/image-2.jpg',
      contentImage: 'assets/images/main-slider/content-image.png',
      button_name: 'Registration now',
      button_link: 'about-us',
    },
    {
      date: 'December 18, 2025',
      title: 'Venez découvrir les opportunités d\'emploi',
      location: 'Grand Théâtre de Dakar',
      image: 'assets/images/main-slider/image-2.jpg',
      contentImage: 'assets/images/main-slider/content-image.png',
      button_name: 'Registration now',
      button_link: 'about-us',
    },
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

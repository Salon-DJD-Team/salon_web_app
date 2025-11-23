import { Component, AfterViewInit, input } from '@angular/core';
import { StrapiHomepageModel } from '../../models/strapi.content.model';
import { CONTACT_SALON_EMAIL } from '../../layout/header-v2/header-v2.component';

declare var jQuery: any;
declare var main_slider: any;
declare var parallax_1: any;
declare var parallax_2: any;
declare var time_countdown: any;

@Component({
  selector: 'app-slider-v4',
  imports: [],
  templateUrl: './slider-v4.component.html',
})
export class SliderV4Component implements AfterViewInit {
  content = input<StrapiHomepageModel | null>();
	ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			main_slider();
			parallax_1();
			// parallax_2();
			time_countdown();
		  }, 100);
	  })(jQuery);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openSendEmail(): void {
    window.location.href = 'mailto:' + CONTACT_SALON_EMAIL;
  }

}

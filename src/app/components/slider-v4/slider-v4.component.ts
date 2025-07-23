import { Component, AfterViewInit } from '@angular/core';

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
  
	ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			main_slider();
			parallax_1();
			parallax_2();
			time_countdown();
		  }, 100);
	  })(jQuery);
  }

}

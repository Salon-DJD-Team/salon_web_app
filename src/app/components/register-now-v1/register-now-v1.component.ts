import { AfterViewInit, Component } from '@angular/core';

declare var jQuery: any;
declare var parallax_2: any;

@Component({
  selector: 'app-register-now-v1',
  imports: [],
  templateUrl: './register-now-v1.component.html',
})
export class RegisterNowV1Component implements AfterViewInit {

  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
      parallax_2();
		  }, 100);
	  })(jQuery);
  }

}

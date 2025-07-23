import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var jQuery: any;
declare var facts_counter: any;

@Component({
  selector: 'app-facts-counter-v1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facts-counter-v1.component.html',
})
export class FactsCounterV1Component implements AfterViewInit {

  ngAfterViewInit(): void {
	(function ($) {
		setTimeout(function(){
			facts_counter();
		  }, 100);
	  })(jQuery);
  }

  facts = [
    {
      title: "Speakers",
      counter: "124",
      suffix: '+',
    },
    {
      title: "Attendence",
      counter: "1140",
      suffix: '',
    },
    {
      title: "Workshops",
      counter: "8",
      suffix: 'HR',
    },
    {
      title: "Guests",
      counter: "205",
      suffix: '+',
    },
  ];

}

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
      title: "Grands Employeurs",
      counter: "70",
      suffix: '+',
    },
    {
      title: "Participants",
      counter: "10000",
      suffix: '',
    },
    {
      title: "De panel avec des Experts",
      counter: "40",
      suffix: 'h',
    },
    {
      title: "Emplois et stages à pourvoir",
      counter: "3000",
      suffix: '+',
    },
  ];

}

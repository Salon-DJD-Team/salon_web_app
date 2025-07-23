import { Component } from '@angular/core';
import { BannerV1Component } from '../../layout/banner-v1/banner-v1.component';
import { NewsletterV2Component } from '../../components/newsletter-v2/newsletter-v2.component';

@Component({
  selector: 'app-not-found',
  imports: [
    BannerV1Component,
    NewsletterV2Component
  ],
  templateUrl: './not-found.component.html',
})
export class NotfoundComponent {

}

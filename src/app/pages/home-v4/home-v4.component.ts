import { Component } from '@angular/core';
import { FactsCounterV1Component } from '../../components/facts-counter-v1/facts-counter-v1.component';
import { FeaturesV2Component } from '../../components/features-v2/features-v2.component';
import { EventsV5Component } from '../../components/events-v5/events-v5.component';
import { RegisterNowV1Component } from '../../components/register-now-v1/register-now-v1.component';
import { PricePlanV4Component } from '../../components/price-plan-v4/price-plan-v4.component';
import { TeamsV4Component } from '../../components/teams-v4/teams-v4.component';
import { CtaV1Component } from '../../components/cta-v1/cta-v1.component';
import { BlogsV1Component } from '../../components/blogs-v1/blogs-v1.component';
import { SliderV4Component } from '../../components/slider-v4/slider-v4.component';
import { AboutUsV4Component } from '../../components/about-us-v4/about-us-v4.component';
import { ServicesV1Component } from '../../components/services-v1/services-v1.component';
import { ContactInfoV1Component } from '../../components/contact-info-v1/contact-info-v1.component';
import { PartnersV1Component } from '../../components/partners-v1/partners-v1.component';
import { StrapiContentService } from '../../services/strapi-content/strapi-content.service';
import { StrapiHomepageModel } from '../../models/strapi.content.model';

@Component({
  selector: 'app-home-v4',
  imports: [
    SliderV4Component,
    AboutUsV4Component,
    FactsCounterV1Component,
    FeaturesV2Component,
    EventsV5Component,
    RegisterNowV1Component,
    // PricePlanV4Component,
    // TeamsV4Component,
    CtaV1Component,
    BlogsV1Component,
    ServicesV1Component,
    ContactInfoV1Component,
    PartnersV1Component,
  ],
  templateUrl: './home-v4.component.html',
})
export class HomeV4Component {
  homePage: StrapiHomepageModel | null = null;
  constructor(private strapiContentService: StrapiContentService) {
    this.loadHomepageContent();
  }

  private loadHomepageContent() {
    this.strapiContentService.getHomepageContent().subscribe({
      next: (data) => {
        this.homePage = data;
        console.log('Homepage content loaded:', this.homePage);
      },
      error: (error) => {
        console.error('Error loading homepage content:', error);
      },
    });
  }
}

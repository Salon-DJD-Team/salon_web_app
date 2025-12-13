import { Component, input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { StrapiAboutEventModel } from '../../models/strapi.content.model';
import { DisplayMediaFromStrapiPipe } from '../../pipes/display-image-from-strapi/display-media-from-strapi.pipe';
import { SafeHtmlPipe } from '../../pipes/safe-html/safe-html.pipe';
@Component({
  selector: 'app-about-us-v4',
  imports: [CarouselModule, DisplayMediaFromStrapiPipe, SafeHtmlPipe],
  templateUrl: './about-us-v4.component.html'
})
export class AboutUsV4Component {
  content = input<StrapiAboutEventModel | null>();
  constructor() {}
}

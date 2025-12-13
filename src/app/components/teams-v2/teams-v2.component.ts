import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrapiSpeakersContentModel } from '../../models/strapi.content.model';
import { DisplayMediaFromStrapiPipe } from '../../pipes/display-image-from-strapi/display-media-from-strapi.pipe';

@Component({
  selector: 'app-teams-v2',
  standalone: true,
  imports: [CommonModule, DisplayMediaFromStrapiPipe],
  templateUrl: './teams-v2.component.html',
})
export class TeamsV2Component {
  content = input<StrapiSpeakersContentModel | null>(null);


  getAnimationDelay(index: number): string {
    return (index % 4) * 150 + 'ms';
  }

  getAnimationClass(index: number): string {
    return index < 4 ? 'fadeInLeft' : 'fadeInRight';
  }
}

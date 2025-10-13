import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { SocialNetwork, StrapiFooterContentModel } from '../../models/strapi.content.model';
import { StrapiContentService } from '../../services/strapi-content/strapi-content.service';
import { DisplayMediaFromStrapiPipe } from '../../pipes/display-image-from-strapi/display-media-from-strapi.pipe';

export const socialNeworksContentSignal = signal<SocialNetwork[] | null>(null);
@Component({
  selector: 'app-footer-v3',
  imports: [NgOptimizedImage, CommonModule, DisplayMediaFromStrapiPipe],
  templateUrl: './footer-v3.component.html',
})
export class FooterV3Component implements OnInit {
  content: StrapiFooterContentModel | null = null;
  // Current Year
  currentYear: number = new Date().getFullYear();
  constructor(private strapiContentService: StrapiContentService) {}

  ngOnInit() {
    this.loadFooterContent();
  }

  private loadFooterContent() {
    this.strapiContentService.getFooterContent().subscribe({
      next: (data) => {
        this.content = data;
        socialNeworksContentSignal.set(data.data.social_networks);
      },
      error: (error) => {
        console.error('Error loading footer content:', error);
      },
    });
  }
}

import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface MetaTagConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private defaultImage = 'https://salondjd.sn/assets/images/og-image.jpg';
  private defaultUrl = 'https://salondjd.sn';
  private siteTitle = 'Salon DJD 2025';

  constructor(private meta: Meta, private title: Title) {}

  /**
   * Update meta tags for social sharing
   * Call this method in your component's ngOnInit or route resolver
   */
  updateMetaTags(config: MetaTagConfig): void {
    const {
      title,
      description,
      image = this.defaultImage,
      url = this.defaultUrl,
      type = 'website',
      author = 'Salon DJD Team'
    } = config;

    // Update page title
    this.title.setTitle(`${title} | ${this.siteTitle}`);

    // Update standard meta tags
    this.updateMetaTag('description', description);
    this.updateMetaTag('author', author);

    // Update Open Graph meta tags
    this.updateMetaProperty('og:title', title);
    this.updateMetaProperty('og:description', description);
    this.updateMetaProperty('og:image', image);
    this.updateMetaProperty('og:image:width', '1200');
    this.updateMetaProperty('og:image:height', '630');
    this.updateMetaProperty('og:url', url);
    this.updateMetaProperty('og:type', type);
    this.updateMetaProperty('og:site_name', this.siteTitle);

    // Update Twitter Card meta tags
    this.updateMetaTag('twitter:title', title);
    this.updateMetaTag('twitter:description', description);
    this.updateMetaTag('twitter:image', image);
    this.updateMetaTag('twitter:card', 'summary_large_image');
    this.updateMetaTag('twitter:url', url);

    // Update canonical URL
    const canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = url;
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = url;
      document.head.appendChild(link);
    }
  }

  /**
   * Reset meta tags to default values
   */
  resetMetaTags(): void {
    this.updateMetaTags({
      title: 'Salon Dakar Job Dating Edition 2025',
      description: 'Discover job opportunities and connect with top employers at Salon DJD 2025. Join us for networking, job interviews, and career development.',
      image: this.defaultImage,
      url: this.defaultUrl
    });
  }

  /**
   * Update a single meta tag
   */
  private updateMetaTag(name: string, content: string): void {
    const tag = this.meta.getTag(`name='${name}'`) || this.meta.getTag(`property='${name}'`);
    if (tag) {
      this.meta.updateTag({ name, content });
    } else {
      this.meta.addTag({ name, content });
    }
  }

  /**
   * Update a single meta property
   */
  private updateMetaProperty(property: string, content: string): void {
    const tag = this.meta.getTag(`property='${property}'`);
    if (tag) {
      this.meta.updateTag({ property, content });
    } else {
      this.meta.addTag({ property, content });
    }
  }

  /**
   * Get current meta tag value
   */
  getMetaTag(name: string): string | null {
    const tag = this.meta.getTag(`name='${name}'`);
    return tag ? tag.getAttribute('content') : null;
  }

  /**
   * Get current meta property value
   */
  getMetaProperty(property: string): string | null {
    const tag = this.meta.getTag(`property='${property}'`);
    return tag ? tag.getAttribute('content') : null;
  }
}

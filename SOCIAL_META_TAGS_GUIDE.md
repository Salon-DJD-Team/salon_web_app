# Social Meta Tags Implementation Guide

## Overview
This guide explains how to implement Open Graph and Twitter Card meta tags in your Angular application for rich social media previews.

## Setup Instructions

### 1. **Image Preparation**
Create two optimized images and place them in your public assets folder:

- **OG Image** (1200x630px): `public/assets/images/og-image.png`
  - Used by Facebook, LinkedIn, WhatsApp, and others
  - Recommended: 1200x630 pixels
  - Format: PNG or JPG

- **Twitter Image** (1024x512px or 1200x630px): `public/assets/images/twitter-image.png`
  - Used by Twitter/X
  - Can be same size as OG image

### 2. **Update Domain**
Replace `https://salondjd.sn` in `src/index.html` with your actual domain:

```html
<meta property="og:url" content="https://salondjd.sn/" />
<meta property="og:image" content="https://salondjd.sn/assets/images/og-image.png" />
<meta name="twitter:image" content="https://salondjd.sn/assets/images/twitter-image.png" />
```

### 3. **Using the MetaService in Components**

#### Example 1: Home Page Component
```typescript
import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-home-v4',
  templateUrl: './home-v4.component.html',
})
export class HomeV4Component implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.updateMetaTags({
      title: 'Salon Dakar Job Dating Edition 2025',
      description: 'Discover job opportunities and connect with top employers at Salon DJD 2025.',
      image: 'https://yourdomain.com/assets/images/og-image.png',
      url: 'https://yourdomain.com/'
    });
  }
}
```

#### Example 2: Event Details Page
```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(
    private metaService: MetaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const eventId = params['id'];
      // Fetch event details
      this.event = this.getEventDetails(eventId);

      // Update meta tags dynamically
      this.metaService.updateMetaTags({
        title: this.event.title,
        description: this.event.description,
        image: this.event.image || 'https://yourdomain.com/assets/images/og-image.png',
        url: `https://yourdomain.com/event-details/${eventId}`,
        type: 'article'
      });
    });
  }

  getEventDetails(id: string): any {
    // Your logic to fetch event details
    return {};
  }
}
```

#### Example 3: Blog Post Page
```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
})
export class BlogDetailsComponent implements OnInit {
  post: any;

  constructor(
    private metaService: MetaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.post = this.getBlogPost(slug);

      this.metaService.updateMetaTags({
        title: this.post.title,
        description: this.post.excerpt,
        image: this.post.featuredImage,
        url: `https://yourdomain.com/blog/${slug}`,
        type: 'article',
        author: this.post.author
      });
    });
  }

  getBlogPost(slug: string): any {
    // Your logic to fetch blog post
    return {};
  }
}
```

### 4. **Global Error Page Example**
```typescript
import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.updateMetaTags({
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.',
      url: 'https://yourdomain.com/not-found'
    });
  }
}
```

## Meta Tags Included

### Open Graph Tags (og:*)
- `og:type` - Type of content (website, article, etc.)
- `og:title` - Title of your page
- `og:description` - Description of your page
- `og:image` - Image URL for preview
- `og:url` - Canonical URL
- `og:site_name` - Your site name

### Twitter Card Tags (twitter:*)
- `twitter:card` - Card type (summary_large_image)
- `twitter:title` - Title for Twitter
- `twitter:description` - Description for Twitter
- `twitter:image` - Image for Twitter
- `twitter:creator` - Your Twitter handle

### Standard Meta Tags
- `description` - Page description
- `keywords` - SEO keywords
- `author` - Content author
- `canonical` - Canonical URL

## Testing Your Meta Tags

### 1. **Facebook Share Debugger**
Visit: https://developers.facebook.com/tools/debug/sharing/
Paste your URL to see how it will appear on Facebook

### 2. **LinkedIn Post Inspector**
Visit: https://www.linkedin.com/post-inspector/
Paste your URL to preview LinkedIn sharing

### 3. **Twitter Card Validator**
Visit: https://cards-dev.twitter.com/validator
Paste your URL to validate Twitter cards

### 4. **WhatsApp Preview**
Send the link in WhatsApp to see the preview

## Best Practices

1. **Image Dimensions**: Use 1200x630px for OG images
2. **Image Size**: Keep images under 5MB
3. **Description Length**: Keep descriptions under 160 characters for best display
4. **Unique URLs**: Ensure each page has a unique canonical URL
5. **HTTPS**: All URLs should use HTTPS for security
6. **Update Timing**: Update meta tags in `ngOnInit()` or route resolver
7. **Fallback Images**: Always provide a fallback default image
8. **Caching**: Social platforms cache meta tags; use debuggers to refresh cache

## Troubleshooting

### Meta tags not updating
- Clear browser cache
- Use the social platform's share debugger to refresh
- Ensure you're using the MetaService correctly
- Check that your URLs are publicly accessible

### Image not showing
- Verify the image URL is correct and publicly accessible
- Check image format (PNG/JPG)
- Ensure image is at least 1200x630px
- Test with the platform's debugger

### Links not sharing
- Verify the domain is not blocked by the platform
- Check robots.txt allows access
- Ensure meta tags are in `<head>` section
- Test with official platform debuggers

## Advanced Usage

### Using Route Resolvers
```typescript
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MetaService } from './meta.service';

@Injectable({ providedIn: 'root' })
export class MetaResolver implements Resolve<void> {
  constructor(private metaService: MetaService) {}

  resolve(): void {
    this.metaService.resetMetaTags();
  }
}
```

Then in your routing module:
```typescript
const routes = [
  {
    path: 'event',
    component: EventComponent,
    resolve: { meta: MetaResolver }
  }
];
```

### Dynamic Image Generation
Consider using a service like Cloudinary or Vercel OG to dynamically generate images with titles:
```typescript
this.metaService.updateMetaTags({
  title: this.event.title,
  description: this.event.description,
  image: `https://yourdomain.com/api/og?title=${this.event.title}`
});
```

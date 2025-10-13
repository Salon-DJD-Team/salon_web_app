import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'displayMediaFromStrapi'
})
export class DisplayMediaFromStrapiPipe implements PipeTransform {
  config = (window as any).config;
  strapiBaseUrl = this.config.contentApiUrl;
  sanitizer = inject(DomSanitizer);
  transform(src: string, ...args: unknown[]): SafeResourceUrl | string {
    if (!src) return '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${this.strapiBaseUrl}${src}`);
  }

}

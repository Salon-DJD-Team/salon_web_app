import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigModel } from '../../models/appConfig.model';
import { StrapiHomepageModel } from '../../models/strapi.content.model';

@Injectable({
  providedIn: 'root',
})
export class StrapiContentService {
  private config: AppConfigModel = (window as any).config as AppConfigModel;
  private strapiBaseUrl = this.config.contentApiUrl;
  private homepageEndpoint = '/homepage';
  private aboutEndpoint = '/about-event';
  private pavilionsEndpoint = '/espace-pavilion';
  private sectorsEndpoint = '/sectors-event';
  private partnersEndpoint = '/partner';
  private newsLetterEndpoint = '/newsletter';
  private footerEndpoint = '/footer';
  private locale = 'fr';
  constructor(private http: HttpClient) {}

  getHomepageContent() {
    let params = new HttpParams();
    params = params.append('populate', '*');
    params = params.append('locale', this.locale);
    return this.http.get<StrapiHomepageModel>(
      `${this.strapiBaseUrl}${this.homepageEndpoint}`,
      { params }
    );
  }
}

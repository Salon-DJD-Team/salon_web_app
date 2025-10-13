import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigModel } from '../../models/appConfig.model';
import { StrapiAboutEventModel, StrapiFooterContentModel, StrapiHomepageModel, StrapiNewsletterContentModel, StrapiPartnersModel, StrapiPavilionModel, StrapiSectorActivityModel } from '../../models/strapi.content.model';

@Injectable({
  providedIn: 'root',
})
export class StrapiContentService {
  private config: AppConfigModel = (window as any).config as AppConfigModel;
  private strapiBaseUrl = this.config.contentApiUrl;
  private homepageEndpoint = '/api/homepage';
  private aboutEndpoint = '/api/about-event';
  private pavilionsEndpoint = '/api/espace-pavilion';
  private sectorsEndpoint = '/api/sectors-event';
  private partnersEndpoint = '/api/partner';
  private newsLetterEndpoint = '/api/newsletter';
  private footerEndpoint = '/api/footer';
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

  getPartnersContents() {
    let params = new HttpParams();
    params = params.append('populate[items][populate]', '*');
    params = params.append('locale', this.locale);
    return this.http.get<StrapiPartnersModel>(`${this.strapiBaseUrl}${this.partnersEndpoint}`, {
      params,
    });
  }

  getPavilionsContents() {
    let params = new HttpParams();
    params = params.append('populate', '*');
    params = params.append('locale', this.locale);
    return this.http.get<StrapiPavilionModel>(`${this.strapiBaseUrl}${this.pavilionsEndpoint}`, { params });
  }

  getSectorsContents() {
    let params = new HttpParams();
    params = params.append('populate', '*');
    params = params.append('locale', this.locale);
    return this.http.get<StrapiSectorActivityModel>(`${this.strapiBaseUrl}${this.sectorsEndpoint}`, { params });
  }

  getAboutContent() {
    let params = new HttpParams();
    params = params.append('populate', '*');
    params = params.append('locale', this.locale);
    return this.http.get<StrapiAboutEventModel>(`${this.strapiBaseUrl}${this.aboutEndpoint}`, { params });
  }

  getFooterContent() {
    let params = new HttpParams();
    params = params.append('populate[leftSide][populate]', '*');
    params = params.append('locale', this.locale);
    params = params.append('populate[social_networks]', '*');
    return this.http.get<StrapiFooterContentModel>(`${this.strapiBaseUrl}${this.footerEndpoint}`, { params });
  }

  getNewsletterContent() {
    let params = new HttpParams();
    params = params.append('populate[magazines][populate]', '*');
    params = params.append('locale', this.locale);
    return this.http.get<StrapiNewsletterContentModel>(`${this.strapiBaseUrl}${this.newsLetterEndpoint}`, { params });
  }
}

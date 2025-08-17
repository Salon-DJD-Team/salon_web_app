import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AppConfigModel } from '../../models/appConfig.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: AppConfigModel = (window as any).config as AppConfigModel;
  constructor(private http: HttpClient) {
    
  }


}

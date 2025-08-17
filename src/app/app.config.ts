import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ConfigService } from './services/config/config.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { AppConfigModel } from './models/appConfig.model';

function initializeApp() {
  const http = inject(HttpClient);
  return http
    .get('/config/config.json')
    .toPromise()
    .then((config) => {
      (window as any).config = config as AppConfigModel;
    });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideAppInitializer(initializeApp),
  ],
};

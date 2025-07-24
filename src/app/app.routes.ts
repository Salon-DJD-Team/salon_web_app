import { Routes } from '@angular/router';

export const routes: Routes = [
  // Define your application routes here
  {
        path: '',
        loadComponent: () => import('./pages/home-v4/home-v4.component').then((m) => m.HomeV4Component),
        data: {
            title: 'Homepage V4',
        }
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotfoundComponent),
        data: {
            title: '404 Not Found',
        }
      }
];

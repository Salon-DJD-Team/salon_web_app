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
        redirectTo: '',
      }
];

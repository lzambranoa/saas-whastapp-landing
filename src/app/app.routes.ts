import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';
import { Home } from './dashboard/pages/home/home';
import { BuildPage } from './landing-builder/pages/build/build';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard/home',
        pathMatch: 'full'
      },
    
      {
        path: 'dashboard',
        component: Layout,
        children: [
          {
            path: 'home',
            component: Home
          },
          {
            path: 'builder/:id',
            component: BuildPage
          },
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          }
        ]
      },
    
      {
        path: '**',
        redirectTo: 'dashboard/home'
      }
];

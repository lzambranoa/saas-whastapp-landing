import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';
import { Home } from './dashboard/pages/home/home';
import { BuildPage } from './landing-builder/pages/build/build';
import { PreviewPage } from './landing-builder/pages/preview/preview.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/home',
    pathMatch: 'full'
  },

  /* =========================
     DASHBOARD
  ========================= */
  {
    path: 'dashboard',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },

  /* =========================
     BUILDER (FUERA DEL DASHBOARD)
  ========================= */
  {
    path: 'builder/:id',
    component: BuildPage
  },
  {
    path: 'builder/:id/preview',
    component: PreviewPage
  },

  /* =========================
     FALLBACK
  ========================= */
  {
    path: '**',
    redirectTo: 'dashboard/home'
  }
];

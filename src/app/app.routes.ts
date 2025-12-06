import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard/pages/home/home').then(m => m.Home),
    },
    {
        path: 'builder',
        loadComponent: () => import('./landing-builder/pages/build/build').then(m => m.BuildPage),
    },
    {
        path: '**',
        redirectTo: '',
    },
];

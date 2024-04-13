import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'heroes/list',
  },
  {
    path: '',
    loadChildren: () => import('home').then((m) => m.HomeModule),
  },
  {
    path: 'heroes/list',
    loadComponent: () => import('hero-list').then((c) => c.HeroListComponent),
  },
];

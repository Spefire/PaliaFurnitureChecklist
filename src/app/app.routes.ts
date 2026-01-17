import { Routes } from '@angular/router';

import { PageTitles } from '@src/models/pages.model';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage),
    title: PageTitles.dashboard + ' | ' + PageTitles.app,
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./pages/legacy/legacy.page').then(m => m.LegacyPage),
    title: PageTitles.legacy + ' | ' + PageTitles.app,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

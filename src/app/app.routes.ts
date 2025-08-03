import { Routes } from '@angular/router';

import { PageTitles } from '@src/models/pages.model';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/main/main.page').then(m => m.MainPage),
    title: PageTitles.app,
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then(m => m.ContactPage),
    title: PageTitles.contact + ' - ' + PageTitles.app,
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./pages/legacy/legacy.page').then(m => m.LegacyPage),
    title: PageTitles.legacy + ' - ' + PageTitles.app,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

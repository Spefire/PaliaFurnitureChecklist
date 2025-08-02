import { Routes } from '@angular/router';

import { PageTitles } from '@src/models/pages.model';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/welcome/welcome.page').then(m => m.WelcomePage),
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

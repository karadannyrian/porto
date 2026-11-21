import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), title: 'Raka Riandanny – Front-End Developer' },
  { path: 'projects/:slug', loadComponent: () => import('./case-study/case-study.component').then(m => m.CaseStudyComponent), title: 'Case study – Raka Riandanny' },
  { path: '**', redirectTo: '' },
];

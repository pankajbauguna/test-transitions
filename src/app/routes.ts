import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  },
  {
    path: 'client',
    loadChildren: './client/client.module#ClientModule',
  },
  {
    path: 'hr',
    loadChildren: './hr/hr.module#HRModule',
  },
  {
    path: 'candidate',
    loadChildren: './candidate/candidate.module#CandidateModule',
  },
  {
    path: '**', redirectTo: '/login'
  }
];

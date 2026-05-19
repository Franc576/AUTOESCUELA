import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Reservas } from './pages/reservas/reservas';
import { Test } from './pages/test/test';
import { Conocenos } from './pages/conocenos/conocenos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'conocenos', component: Conocenos },
  { path: 'reservas', component: Reservas },
  { path: 'test', component: Test },
  { path: '**', redirectTo: '' }
];

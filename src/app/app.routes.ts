import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Reservas } from './pages/reservas/reservas';
import { Test } from './pages/test/test';
import { Permisos } from './pages/permisos/permisos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'reservas', component: Reservas },
  { path: 'test', component: Test },
  { path: 'permisos', component: Permisos },
  { path: '**', redirectTo: '' }
];


import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Reservas } from './pages/reservas/reservas';
import { Test } from './pages/test/test';
import { Permisos } from './pages/permisos/permisos';
import { Conocenos } from './pages/conocenos/conocenos';
import { Blog } from './pages/blog/blog';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'conocenos', component: Conocenos },
  { path: 'blog', component: Blog },
  { path: 'reservas', component: Reservas },
  { path: 'test', component: Test },
  { path: 'permisos', component: Permisos },
  { path: '**', redirectTo: '' }
];


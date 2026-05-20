import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Reservas } from './pages/reservas/reservas';
import { Temario } from './pages/temario/temario';

import { Permisos } from './pages/permisos/permisos';
import { Conocenos } from './pages/conocenos/conocenos';
import { Blog } from './pages/blog/blog';
import { Signup } from './pages/signup/signup';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'conocenos', component: Conocenos },
  { path: 'blog', component: Blog },
  { path: 'reservas', component: Reservas },
  { path: 'temario', component: Temario },
  { path: 'temario/:id', loadComponent: () => import('./pages/tema-detalle/tema-detalle').then(m => m.TemaDetalle) },
  { path: 'permisos', component: Permisos },
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' }
];



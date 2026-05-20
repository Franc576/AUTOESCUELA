import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Reservas } from './pages/reservas/reservas';
import { Temario } from './pages/temario/temario';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'reservas', component: Reservas },
  { path: 'temario', component: Temario },
  { path: 'temario/:id', loadComponent: () => import('./pages/tema-detalle/tema-detalle').then(m => m.TemaDetalle) },
  { path: '**', redirectTo: '' }
];

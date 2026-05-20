import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface Tema {
  id: number;
  title: string;
  content: string;
}

const TEMAS: Tema[] = [
  { id: 1, title: 'Uso de las vías', content: 'Contenido oficial del DGT sobre uso de vías, carriles y circulación...' },
  { id: 2, title: 'Señales de circulación', content: 'Contenido oficial del DGT sobre señales, prioridad y marcas...' },
  { id: 3, title: 'Velocidad', content: 'Contenido oficial del DGT sobre límites de velocidad y distancia...' },
  { id: 4, title: 'Preferencia de paso', content: 'Contenido oficial del DGT sobre intersecciones, glorietas...' },
  { id: 5, title: 'Maniobras', content: 'Contenido oficial del DGT sobre incorporaciones, adelantamientos...' },
  { id: 6, title: 'Alumbrado', content: 'Contenido oficial del DGT sobre luces, señalización nocturna...' },
  { id: 7, title: 'Seguridad Vial', content: 'Contenido oficial del DGT sobre alcohol, drogas, cinturón...' },
  { id: 8, title: 'Mecánica básica', content: 'Contenido oficial del DGT sobre mantenimiento, frenos...' },
];

@Component({
  selector: 'app-tema-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tema-detalle.html',
  styleUrl: './tema-detalle.css',
})
export class TemaDetalle {
  // Navigate back to the temario list
  goBack(): void {
    this.router.navigate(['/temario']);
  }

  tema?: Tema;
  constructor(private route: ActivatedRoute, private router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tema = TEMAS.find(t => t.id === id);
    if (!this.tema) {
      this.router.navigate(['/temario']);
    }
  }
}

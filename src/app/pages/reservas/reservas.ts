import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Reserva {
  dia: string;
  hora: string;
  alumno: string;
}

@Component({
  selector: 'app-reservas',
  imports: [FormsModule, RouterModule],
  templateUrl: './reservas.html',
  styleUrl: './reservas.css',
})
export class Reservas implements OnInit {
  isLoggedIn: boolean = false;
  nombreAlumno: string = 'Alumno';
  fechaReserva: string = '';
  horaReserva: string = '';
  minFecha: string = '';
  
  misReservas: Reserva[] = [];
  proximaClase: Reserva | null = null;

  ngOnInit() {
    // Establecer fecha mínima como hoy
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    this.minFecha = `${yyyy}-${mm}-${dd}`;

    if (typeof localStorage !== 'undefined') {
      const sessionStr = localStorage.getItem('autoescuela_session');
      if (sessionStr) {
        this.isLoggedIn = true;
        try {
          const sessionObj = JSON.parse(sessionStr);
          this.nombreAlumno = sessionObj.username || sessionObj.email || sessionStr;
        } catch (e) {
          this.nombreAlumno = sessionStr;
        }
        this.cargarReservas();
      }
    }
  }

  cargarReservas() {
    if (typeof localStorage !== 'undefined') {
      const reservasStr = localStorage.getItem('reservas_autoescuela');
      if (reservasStr) {
        try {
          const todasLasReservas = JSON.parse(reservasStr);
          // Filtrar para el alumno actual
          this.misReservas = todasLasReservas.filter((r: Reserva) => r.alumno === this.nombreAlumno);
          
          if (this.misReservas.length > 0) {
            // Coger la última reserva hecha (o se podrían ordenar por fecha)
            this.proximaClase = this.misReservas[this.misReservas.length - 1];
          } else {
            this.proximaClase = null;
          }
        } catch (e) {
          this.misReservas = [];
          this.proximaClase = null;
        }
      } else {
        this.misReservas = [];
        this.proximaClase = null;
      }
    }
  }

  validarFecha() {
    if (!this.fechaReserva) return;
    
    const [year, month, day] = this.fechaReserva.split('-');
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    
    const dayOfWeek = date.getDay(); 
    if (dayOfWeek !== 1 && dayOfWeek !== 3 && dayOfWeek !== 5) {
      alert('Solo se permiten reservar clases los Lunes, Miércoles y Viernes.');
      this.fechaReserva = '';
    }
  }

  cancelarPractica(reserva: Reserva | null) {
    if (!reserva) return;

    if (confirm('¿Estás seguro de que deseas cancelar esta clase práctica?')) {
      if (typeof localStorage !== 'undefined') {
        const reservasStr = localStorage.getItem('reservas_autoescuela');
        if (reservasStr) {
          try {
            let todasLasReservas = JSON.parse(reservasStr);
            // Eliminar la reserva que coincida con la que queremos cancelar
            todasLasReservas = todasLasReservas.filter((r: Reserva) => 
              !(r.dia === reserva.dia && r.hora === reserva.hora && r.alumno === reserva.alumno)
            );
            localStorage.setItem('reservas_autoescuela', JSON.stringify(todasLasReservas));
            alert('¡Clase práctica cancelada con éxito!');
            this.cargarReservas();
          } catch (e) {
            console.error(e);
          }
        }
      }
    }
  }

  reservar() {
    if (!this.fechaReserva || !this.horaReserva) {
      alert('Por favor, selecciona una fecha y una hora.');
      return;
    }

    if (typeof localStorage !== 'undefined') {
      let reservas: Reserva[] = [];
      const reservasStr = localStorage.getItem('reservas_autoescuela');
      if (reservasStr) {
        try {
          reservas = JSON.parse(reservasStr);
        } catch (e) {
          reservas = [];
        }
      }

      const nuevaReserva = {
        dia: this.fechaReserva,
        hora: this.horaReserva,
        alumno: this.nombreAlumno
      };

      reservas.push(nuevaReserva);
      localStorage.setItem('reservas_autoescuela', JSON.stringify(reservas));
      
      this.cargarReservas(); // Actualizar listado local

      alert('¡Clase reservada con éxito!');
      
      this.fechaReserva = '';
      this.horaReserva = '';
    }
  }

  formatDate(dateString: string): { day: string, month: string } {
    if (!dateString) return { day: '', month: '' };
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    const month = months[date.getMonth()];
    return { day, month };
  }
}

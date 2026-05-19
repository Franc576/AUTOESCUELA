import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly loggedInUser = signal<string | null>(null);

  constructor() {
    this.checkSession();
  }

  // Comprueba si hay una sesión activa en localStorage
  checkSession(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const session = localStorage.getItem('autoescuela_session');
      if (session) {
        try {
          const parsed = JSON.parse(session);
          this.loggedInUser.set(parsed.username);
        } catch {
          this.loggedInUser.set(null);
        }
      } else {
        this.loggedInUser.set(null);
      }
    }
  }

  // Cierra la sesión activa
  logout(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('autoescuela_session');
      this.loggedInUser.set(null);
      alert('Sesión cerrada correctamente. ¡Vuelve pronto! 🚗');
    }
  }
}

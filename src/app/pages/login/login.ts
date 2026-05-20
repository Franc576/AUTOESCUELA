import { Component, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

// ──────────────────────────────────────────────────────────────────────────────
// Componente de Inicio de Sesión — AUTOESCUELA MATTHEW
// Verifica las credenciales del usuario contra los datos guardados en
// localStorage por el componente de Signup.
// ──────────────────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // ── Estado reactivo de la UI ────────────────────────────────────────────
  /** Muestra/oculta la contraseña */
  readonly mostrarPassword = signal(false);
  /** true mientras se procesan las credenciales */
  readonly enviando = signal(false);
  /** Mensaje de éxito tras el login */
  readonly mensajeExito = signal('');
  /** Mensaje de error si las credenciales no coinciden */
  readonly mensajeError = signal('');

  // ── Inyección del Router para navegar tras login exitoso ─────────────────
  constructor(private router: Router) {}

  // ── Formulario reactivo de login ────────────────────────────────────────
  readonly loginForm = new FormGroup({
    /** El usuario puede introducir su nombre de usuario o email */
    usuario: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    /** Contraseña tal y como la registró */
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  // ── Toggle de visibilidad de contraseña ─────────────────────────────────
  togglePassword(): void {
    this.mostrarPassword.update((v) => !v);
  }

  // ── Lógica de inicio de sesión ──────────────────────────────────────────
  onSubmit(): void {
    // 1. Marcamos todos los campos como "tocados" para activar los errores
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      this.mensajeError.set('Por favor, rellena todos los campos.');
      return;
    }

    this.enviando.set(true);
    this.mensajeExito.set('');
    this.mensajeError.set('');

    const { usuario, password } = this.loginForm.value;

    // 2. Recuperamos la lista de usuarios registrados en localStorage
    const usuariosGuardados: any[] = JSON.parse(
      localStorage.getItem('autoescuela_users') || '[]'
    );

    // 3. Buscamos un usuario cuyo username O email coincida Y cuya
    //    contraseña sea idéntica a la introducida
    const usuarioEncontrado = usuariosGuardados.find(
      (u: any) =>
        (u.username === usuario || u.email === usuario) &&
        u.password === password
    );

    // 4. Simulamos un breve retardo para dar feedback visual con el spinner
    setTimeout(() => {
      if (usuarioEncontrado) {
        // ── Login exitoso ──────────────────────────────────────────────
        // Guardamos la sesión activa en localStorage
        localStorage.setItem(
          'autoescuela_session',
          JSON.stringify({
            username: usuarioEncontrado.username,
            email: usuarioEncontrado.email,
            loggedInAt: new Date().toISOString(),
          })
        );

        alert(`¡Inicio de sesión correcto! Bienvenido de nuevo, ${usuarioEncontrado.username} 🚗💨`);

        this.mensajeExito.set(
          `¡Bienvenido de nuevo, ${usuarioEncontrado.username}! 🎉`
        );

        // Redirigimos a la Home tras 1.5 segundos para que el usuario
        // vea el mensaje de bienvenida
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500);
      } else {
        // ── Login fallido ──────────────────────────────────────────────
        this.mensajeError.set(
          'Usuario o contraseña incorrectos. ¿Aún no tienes cuenta?'
        );
      }

      this.enviando.set(false);
    }, 600);
  }
}

import { Component, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

// ──────────────────────────────────────────────────────────────────────────────
// Validador personalizado: la contraseña debe tener mínimo 8 caracteres,
// una mayúscula y un número.
// ──────────────────────────────────────────────────────────────────────────────
function passwordStrengthValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value: string = control.value || '';
  const hasUpperCase = /[A-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasMinLength = value.length >= 8;

  if (!hasUpperCase || !hasNumber || !hasMinLength) {
    return {
      passwordStrength: {
        hasUpperCase,
        hasNumber,
        hasMinLength,
      },
    };
  }
  return null;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  // ── Estado de la UI ──────────────────────────────────────────────────────
  /** Muestra/oculta la contraseña en el input */
  readonly mostrarPassword = signal(false);
  /** true mientras se envía el formulario al backend */
  readonly enviando = signal(false);
  /** Mensaje de éxito tras el registro */
  readonly mensajeExito = signal('');
  /** Mensaje de error si algo falla */
  readonly mensajeError = signal('');

  // ── Formulario reactivo ──────────────────────────────────────────────────
  readonly signupForm = new FormGroup({
    /** Nombre de usuario visible en la plataforma */
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    /** Correo electrónico del alumno */
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    /** Contraseña segura (mínimo 8 chars, 1 mayúscula, 1 número) */
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, passwordStrengthValidator],
    }),
    /** Checkbox obligatorio de aceptación de términos */
    terminos: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
    }),
  });

  // ── Getter cómodo para comprobar qué falló en la contraseña ─────────────
  get passwordErrors() {
    return this.signupForm.get('password')?.errors?.['passwordStrength'];
  }

  // ── Getters para los indicadores de fortaleza (usados en el template) ────
  get pwHasMinLength(): boolean {
    return (this.signupForm.get('password')?.value?.length ?? 0) >= 8;
  }

  get pwHasUpperCase(): boolean {
    return /[A-Z]/.test(this.signupForm.get('password')?.value ?? '');
  }

  get pwHasNumber(): boolean {
    return /[0-9]/.test(this.signupForm.get('password')?.value ?? '');
  }

  // ── Toggle visibilidad de contraseña ────────────────────────────────────
  togglePassword(): void {
    this.mostrarPassword.update((v) => !v);
  }

  // ── Envío del formulario ─────────────────────────────────────────────────
  onSubmit(): void {
    // Marcamos todos los campos como "tocados" para mostrar los errores
    this.signupForm.markAllAsTouched();

    if (this.signupForm.invalid) {
      this.mensajeError.set(
        'Por favor, revisa los campos marcados en rojo antes de continuar.'
      );
      return;
    }

    // ── Guardamos los datos del usuario en localStorage ────────────────────
    const nuevoUsuario = {
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password, // En producción, NUNCA guardar en texto plano
    };

    // Recuperamos la lista actual de usuarios registrados (o creamos una vacía)
    const usuariosGuardados: any[] = JSON.parse(
      localStorage.getItem('autoescuela_users') || '[]'
    );

    // Comprobamos si ya existe un usuario con el mismo nombre o correo
    const existeUsuario = usuariosGuardados.some(
      (u: any) =>
        u.username === nuevoUsuario.username ||
        u.email === nuevoUsuario.email
    );

    if (existeUsuario) {
      this.mensajeError.set(
        'Ya existe una cuenta con ese nombre de usuario o correo electrónico.'
      );
      this.enviando.set(false);
      return;
    }

    // Añadimos el nuevo usuario al array y lo guardamos de vuelta
    usuariosGuardados.push(nuevoUsuario);
    localStorage.setItem(
      'autoescuela_users',
      JSON.stringify(usuariosGuardados)
    );

    // Simulamos un breve retardo para que el usuario vea el spinner de carga
    setTimeout(() => {
      alert(`¡Registro completado con éxito! Bienvenido, ${nuevoUsuario.username}. Tus datos se han guardado de forma segura en el navegador.`);
      this.mensajeExito.set(
        `¡Bienvenido, ${nuevoUsuario.username}! Tu cuenta ha sido creada con éxito. Ya puedes iniciar sesión.`
      );
      this.signupForm.reset();
      this.enviando.set(false);
    }, 800);
  }
}

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

    this.enviando.set(true);
    this.mensajeExito.set('');
    this.mensajeError.set('');

    // ── Aquí iría la llamada real al backend ──────────────────────────────
    // Por ahora simulamos un registro exitoso tras 1.5 segundos.
    setTimeout(() => {
      this.mensajeExito.set(
        `¡Bienvenido, ${this.signupForm.value.username}! Tu cuenta ha sido creada con éxito.`
      );
      this.signupForm.reset();
      this.enviando.set(false);
    }, 1500);
  }
}

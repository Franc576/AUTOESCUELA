import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  // Signals para manejar estados reactivos de forma óptima
  enviando = signal(false);
  mensajeExito = signal('');
  mensajeError = signal('');

  // Creamos el formulario reactivo con validaciones robustas
  registroForm = new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    telefono: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('^[0-9]{9}$')] // Valida 9 dígitos numéricos en España
    }),
    tipoCarnet: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  onSubmit() {
    if (this.registroForm.invalid) {
      this.mensajeError.set('Por favor, rellena todos los campos correctamente.');
      return;
    }

    this.enviando.set(true);
    this.mensajeExito.set('');
    this.mensajeError.set('');

    // Preparamos los parámetros para enviarlos a nuestra API local de Express
    const payload = {
      nombre_completo: this.registroForm.value.nombre,
      correo_electronico: this.registroForm.value.email,
      telefono: this.registroForm.value.telefono,
      tipo_carnet: this.registroForm.value.tipoCarnet,
    };

    // Llamamos a nuestro backend local en /api/registro usando la API nativa de fetch (100% estándar)
    fetch('/api/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Error al procesar la solicitud en el servidor');
        }
        return response.json();
      })
      .then((data) => {
        console.log('¡Éxito al registrar y enviar email!', data);
        this.mensajeExito.set('¡Registro completado! Te hemos enviado un correo de confirmación.');
        this.registroForm.reset({
          nombre: '',
          email: '',
          telefono: '',
          tipoCarnet: ''
        });
      })
      .catch((error) => {
        console.error('Fallo en el proceso de registro:', error);
        this.mensajeError.set(
          error.message || 'No se pudo procesar tu registro. Revisa la consola o asegúrate de que tu Express Server esté encendido.'
        );
      })
      .finally(() => {
        this.enviando.set(false);
      });
  }
}



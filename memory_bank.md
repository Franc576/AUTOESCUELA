# 🧠 Autoescuela Matthew - Memory Bank

Este archivo es nuestro **banco de memoria y registro de progreso**. Sirve para mantener el contexto del proyecto, las decisiones de arquitectura, los prompts clave utilizados, y el estado de las tareas para que cualquier sesión de desarrollo sea fluida y estructurada.

---

## 📋 Visión General del Proyecto
**Autoescuela Matthew** es una aplicación web moderna orientada a la gestión y aprendizaje para estudiantes de autoescuela. El objetivo es ofrecer una experiencia premium con una interfaz fluida, interactiva, con soporte nativo de **Dark Mode (Tema Oscuro)** y alto rendimiento.

### 🛠️ Pila Tecnológica
- **Framework:** Angular 18+ (Standalone Components, Signals, nuevo flujo de control `@if`/`@for`).
- **Diseño & Estilos:** CSS moderno / Flexbox y CSS Grid.
- **Estado Global/Local:** Angular Signals para reactividad de alto rendimiento.
- **Control de Versiones:** Git (GitHub: `https://github.com/Franc576/AUTOESCUELA.git`).

---

## 🗺️ Estructura del Proyecto (Mapa de Componentes)
La estructura modular actual de la aplicación se distribuye de la siguiente forma dentro de `autoescuela_sjo/src/app`:

```
src/app/
├── components/
│   └── navbar/          # Barra de navegación principal
└── pages/
    ├── home/            # Página de inicio / Dashboard principal
    ├── registro/        # Formulario de registro para nuevos alumnos
    ├── reservas/        # Sistema de reserva de clases prácticas
    └── test/            # Plataforma de realización de test teóricos
```

---

## 🚀 Estado Actual y Progreso
- [x] **Creación de la base de Angular:** Proyecto Angular estructurado con enrutamiento básico.
- [x] **Creación de componentes clave:** Navbar y páginas (`home`, `reservas`, `test`) creados en formato Standalone.
- [ ] **Configuración e inicialización de Git:** Repositorio enlazado a GitHub (`origin`), pendiente del primer commit y push.
- [ ] **Diseño visual premium:** Aplicar rediseño de interfaz en modo oscuro moderno (estética premium, gradientes suaves, microanimaciones).
- [x] **Lógica de Tests:** Implementación del sistema de preguntas/respuestas interactivo en la sección de test.
- [ ] **Lógica de Reservas:** Sistema interactivo para reservar clases con calendario visual.
- [x] **Página de Permisos de Conducción:** Implementación completa e interactiva de la página de permisos (B, A1, A2, A, AM, C, C+E, CAP) con estética glassmorphic de alto impacto y enrutamiento en Navbar.


---

## 📝 Registro de Prompts y Progreso

En esta sección guardaremos los prompts de sistema y de desarrollo más útiles que vayamos utilizando para avanzar de manera consistente.

### 1. Inicialización y Conexión con GitHub
* **Objetivo:** Vincular el proyecto local y subir los archivos por primera vez.
* **Prompt/Comandos de referencia:**
  ```bash
  git config --global user.name "Franc576"
  git config --global user.email "fjfernandezf68@alumnes.santjosepobrer.es"
  git add .
  git commit -m "Primer commit: Estructura inicial de la Autoescuela con Angular"
  git push -u origin main
  ```

### 2. Estándar de Diseño Premium (Dark Mode)
* **Objetivo:** Mantener una estética moderna, limpia y de lujo.
* **Instrucciones clave de diseño:**
  - **Fondo principal:** Tonos oscuros profundos (ej. `#0f172a` slate-900, `#0b0f19`).
  - **Colores de Acento:** Gradientes suaves y colores neón elegantes (ej. cian, violeta eléctrico o verde esmeralda para éxitos).
  - **Tipografía:** Inter o Roboto.
  - **Efectos:** Glassmorphism (`backdrop-filter: blur()`), bordes sutiles de `1px` semi-transparentes y sombras difuminadas.
  - **Micro-animaciones:** Transiciones suaves de `0.3s ease` en hovers, clicks y navegación.

### 3. Principios de Angular 18+ a Seguir
* **Objetivo:** Escribir código moderno y eficiente.
* **Reglas de código:**
  - Evitar `NgModule`. Todos los componentes deben ser `standalone: true`.
  - Usar **Signals** (`signal()`, `computed()`, `effect()`) para el manejo del estado local en lugar de variables estándar siempre que sea posible.
  - Utilizar la sintaxis nativa de Angular 18+ para el flujo de control en las plantillas HTML:
    ```html
    @if (loading()) {
      <p>Cargando...</p>
    } @else {
      @for (item of items(); track item.id) {
        <div>{{ item.name }}</div>
      }
    }
    ```

### 4. Creación del Test Teórico
* **Prompt/Comando utilizado:** "hazme un test simple de 30 preguntas"
* **Objetivo:** Generar la lógica interactiva (`test.ts`) con 30 preguntas (Array), navegación dinámica, barra lateral de progreso, cálculo de aciertos/fallos y una pantalla de resultados detallada (`test.html`, `test.css`).

### 5. Lógica de Suspenso en Test
* **Prompt/Comando utilizado:** "tienes que cambiar del test, que salga suspendido si tiene mas de 3 fallos"
* **Objetivo:** Ajustar el cálculo de errores (`test.ts`) para incluir como fallos aquellas preguntas no contestadas, de modo que refleje el funcionamiento real del examen de la DGT, y cambiar el texto final a "Suspendido".

### 6. Creación del Formulario de Registro (Premium Dark Mode)
* **Objetivo:** Crear un formulario de registro de alumnos con estética Glassmorphism, validaciones básicas y desplegable de carnets.
* **Prompt Utilizado:**
  > "Estoy en mi rama de trabajo creando un formulario de registro para los alumnos de la autoescuela en Angular. Necesito el código HTML (.html) para un formulario limpio que pida: Nombre completo, Correo electrónico, Teléfono y un desplegable (select) para elegir el tipo de carnet en España (opciones: Coche - Permiso B, Moto - Permiso A2/A, Ciclomotor - Permiso AM). Añade un botón que diga 'Solicitar información' y coméntame cada bloque de código."

### 7. Envío Automático de Email de Confirmación (Express + Nodemailer)
* **Objetivo:** Enviar un correo de confirmación de registro a la dirección introducida por el usuario de forma totalmente automática utilizando un servidor backend de Express integrado con Nodemailer y conectado directamente con la cuenta de Gmail del administrador, garantizando seguridad máxima y evitando servicios de terceros.
* **Prompt Utilizado:**
  > "no hay una forma de que se envie al gmail normal?"

### 8. Creación de la Sección de Permisos de Conducción (Estilo Autoescuela Forti)
* **Objetivo:** Crear una página interactiva, visualmente impactante y adaptada a dispositivos móviles, que detalle los diferentes permisos de conducción (B, A1, A2, A, AM, C, C+E, CAP) replicando el valor informativo de la página de Autoescuela Forti (`autoescuelaforti.com/permisos/`).
* **Prompt Utilizado:**
  > "https://autoescuelaforti.com/permisos/ podrías analizar esta página? hay un apartado con los tipos de permisos, y dentro de cada uno da información de cada permiso, necesto que añadas una parecida."
* **Resultados:**
  - **Componente `Permisos`**: Creado bajo `src/app/pages/permisos` en formato *standalone* de Angular.
  - **Datos Estructurados**: Almacenados mediante Signals de Angular con detalles de edad mínima, categorías, descripciones comerciales, vehículos autorizados por la DGT, y líneas de tiempo de exámenes (teóricos/prácticos/cursos).
  - **Estilo Visual**: Glassmorphic premium (transiciones hover, insignias iluminadas por categoría en cian/ámbar/púrpura, efectos radiales luminosos).
  - **Integración**: Registrada la ruta `/permisos` en `app.routes.ts` y añadida la navegación en la Navbar. Aumentado el límite de presupuesto de estilos (`anyComponentStyle` a 20kB) en `angular.json` para dar cabida a los estilos interactivos.

### 9. Creación de apartado Conócenos
* **Objetivo:** Crear un apartado sobre nosotros con valores, equipo, localización, redes y "trabaja con nosotros".
* **Prompt Utilizado:**
  > "haz un apartado que sea "conocenos" donde salgan los valores de la autoescuela, el equipo que trabaja en la oficina y los profesores, donde encontrarnos, redes sociales, y por ultimo el apartado de "trabaja con nosotros". Y el prompt lo guardas en memory_bank"

### 9. Creación de la sección Blog (Temas Tabú de Conducción)
* **Objetivo:** Crear un blog dinámico que resuelva temas complejos/tabúes sobre la conducción (error de combustible, conducir en invierno, amaxofobia, llevar mascotas, rotondas, aquaplaning) con lectura detallada interactiva.
* **Prompt Utilizado:**
  > "vamos a hacer otra seccion que se llame "blog" ahi resolveremos los temas mas tabus sobre la conduccion: que hacer si te equivocas y echas diesel en vez de gasolina, claves para conducir en invierno, superar el miedo a conducir, llevar mascotas en el coche... pon mas ejemplos, y en cada titular si clicas un articulo que te de consejos y claves, informacion y demas. y el prompt lo guardas en memory_bank"

### 10. Creación de la Pantalla de Registro de Nuevos Usuarios (Signup)
* **Objetivo:** Crear una página de registro de cuenta premium, centrada en pantalla, con estilo glassmorphic coherente con el resto de la app. Pide nombre de usuario, correo, contraseña con validación de fortaleza (mínimo 8 chars, 1 mayúscula, 1 número), y checkbox de términos con su validación.
* **Prompt Utilizado:**
  > "Estoy en mi proyecto de autoescuela en Angular y quiero crear la pantalla de Registro de Nuevos Usuarios. Necesito el código HTML (.html) y CSS (.css) para un formulario moderno y centrado en la pantalla. Debe pedir: Nombre de usuario, Correo electrónico, Contraseña (tipo password) y una casilla (checkbox) para aceptar los términos y condiciones. Añade validaciones visuales básicas y un botón llamativo que diga 'Crear mi cuenta 🚗'. Coméntame el código para entenderlo."
* **Resultados:**
  - **Componente `Signup`**: Creado en `src/app/pages/signup` como componente *standalone* Angular.
  - **Validador personalizado**: `passwordStrengthValidator` con checks de longitud, mayúscula y número implementados como `ValidationErrors` de Angular.
  - **Getters de fortaleza**: `pwHasMinLength`, `pwHasUpperCase`, `pwHasNumber` en la clase TS para evitar expresiones complejas en la plantilla.
  - **Toggle de contraseña**: Botón de ojo para alternar visibilidad del campo password con `Signal` reactivo.
  - **Checkbox estilizado**: CSS personalizado sobre el input nativo con efecto de check dorado.
  - **Integración**: Ruta `/signup` registrada en `app.routes.ts`. Navbar actualizada: botón "Crear cuenta" como enlace directo a la nueva página.
  - **Rama Git**: `feat-Sign-in`, subida a GitHub.

---

## 🗃️ Registro Cronológico de Sesiones
* **2026-05-19 (Sesión 1):** Creación y preparación del `memory_bank.md`. Configuración final de credenciales Git. Implementación funcional del simulador de test. Creación de la rama `feat-formulario` y el formulario de solicitud de información con Glassmorphism. Integración con backend Express + Nodemailer para envío de emails. Creación de la página 'Conócenos'. Sección interactiva 'Blog' con artículos sobre tábues de conducción.
* **2026-05-19 (Sesión 2):** Página premium de Permisos de Conducción (B, A1, A2, A, AM, C, C+E, CAP) con Signals, glassmorphism y línea de tiempo de exámenes. Actualización del formulario de solicitud con los 8 permisos. Resolución de conflictos de merge con `main` (fetch-permisos). Renombrado del branding a **AUTOESCUELA MATTHEW** en todos los ficheros (navbar, index.html, server.ts, app.ts). Creación de la pantalla de **Registro de Nuevos Usuarios** (`/signup`) con validador de contraseña personalizado, toggle de visibilidad, checkbox estilizado y botón premium. Publicada en rama `feat-Sign-in` y subida a GitHub.


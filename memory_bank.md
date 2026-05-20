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

### 10. Creación y Conexión de la Pantalla de Registro y Login (localStorage)
* **Objetivo:** Crear un flujo funcional real de Registro y Login en el navegador del cliente utilizando `localStorage`, con validación cruzada de credenciales y cabecera reactiva.
* **Prompt Utilizado:**
  > "Quiero que conectes el formulario de registro y el de inicio de sesión de mi autoescuela para que funcionen de verdad utilizando localStorage. Modifica los archivos HTML y TypeScript (.ts) necesarios para que: 1) Al registrarse, los datos se guarden de forma segura en la memoria del navegador y avise con un alert. 2) Al iniciar sesión, compruebe si el usuario y la contraseña coinciden con lo guardado y le dé la bienvenida. Haz los cambios directamente en los archivos correspondientes."
* **Resultados:**
  - **Componente `Signup`**: Creado y modificado para verificar usuarios duplicados y persistir objetos JSON en la clave `autoescuela_users` de `localStorage`.
  - **Componente `Login`**: Creado en `src/app/pages/login` con formulario reactivo. Busca credenciales por usuario/correo y contraseña contra la lista persistida.
  - **Validaciones de Seguridad & Alertas**: Avisos `alert()` interactivos del navegador tanto al completar el registro como al iniciar sesión con éxito.
  - **Cabecera Reactiva (`Navbar`)**: Modificada para escuchar el estado de la sesión (`autoescuela_session`). Muestra dinámicamente un mensaje de *"¡Hola, [Usuario]! 👋"* y un botón estilizado para cerrar sesión (`logout()`), ocultando los accesos a formularios.
  - **Enrutado y Compilación**: Registradas las rutas `/signup` y `/login` en `app.routes.ts`. Generados bundles estables de pre-renderizado.
  - **Rama Git**: `feat-Sign-in`, subida a GitHub.

### 11. Integración y Mejora de Imagen del Vehículo de Prácticas (Flota Premium)
* **Objetivo:** Tomar el boceto del vehículo de prácticas aportado en `images/image.png`, mejorar su calidad visual a alta definición realista mediante generación IA de activos premium y diseñar una sección dinámica dedicada a la flota ("Nuestra Flota") en la Home.
* **Prompt Utilizado:**
  > "he hecho un coche y lo he puesto en images, me gustaría que lo usaras para decorar la página y que vean que tenemos coches de practicas, no se si es posible que le intente smejorar la calidad"
* **Resultados:**
  - **Mejora IA**: Generado un render 3D hiperrealista y profesional en 8k de un *Volkswagen Golf Premium* blanco con la rotulación oficial *"AUTOESCUELA MATTHEW"*, placa de prácticas L azul en el techo, y luces de estudio, guardado en `public/coche_practicas.png`.
  - **Sección Flota (`home.html` y `home.css`)**: Implementada una sección premium llamada *"Nuestra Flota"* equipada con una tarjeta *Glassmorphic* para el coche, especificaciones técnicas animadas, insignias ecológicas ("Eco-friendly 🌿") e información detallada de ventajas de aprendizaje (seguridad con doble mando, asistentes de conducción en rampa/sensores y uso del mismo coche en el examen).
  - **Rama Git**: `feat-Sign-in`, subida a GitHub.

### 12. Implementación Completa de Reserva de Prácticas (Restricción de Calendario y Cancelaciones)
* **Objetivo:** Hacer 100% funcional el componente de Reserva de Prácticas con verificación de sesión del usuario, validación estricta de calendario y opción de cancelación dinámica.
* **Prompt Utilizado:**
  > "Estoy en mi proyecto de Angular para la Autoescuela Matthew. Quiero hacer 100% funcional el componente de Reserva de Prácticas modificando su HTML y TypeScript (.ts). Aplica las siguientes reglas en el código:
  > 
  > Control de acceso (Login obligatorio): En el archivo .ts, comprueba si existe la clave 'usuarioLogueado' en el localStorage. Si NO existe, el HTML debe ocultar el formulario y mostrar un mensaje elegante en tonos negros y naranjas que diga: '¡Atención alumno! 🚗 Para reservar tus clases prácticas debes iniciar sesión o crear una cuenta.' Añade dos botones que simulen ir a esas pantallas.
  > 
  > Formulario de Reserva (Solo alumnos): Si el usuario SÍ está logueado, muestra el formulario con vuestro estilo visual. Debe incluir:
  > - Un selector de fecha donde solo se permitan seleccionar Lunes, Miércoles y Viernes (añade una validación en el TS para avisar si eligen otro día).
  > - Un selector de horario dividido en: Mañana (09:00 o 11:00) y Tarde (16:00 o 18:00).
  > 
  > Guardar la reserva: Al hacer clic en el botón 'Confirmar Reserva 📅', guarda los datos de la reserva (Día, Hora y el nombre del alumno) dentro de un array en el localStorage llamado 'reservas_autoescuela' para que se queden registrados de verdad. Muestra un alert de éxito que diga '¡Clase reservada con éxito!'."
  > *(Segunda parte)*: "Vale, ahora haz que las practicas se puedan cancelar y que a la hora de elegir el dia cualquier dia que no sea lunes miercoles o viernes sea imposible de seleccionar"
* **Resultados:**
  - **Componente `Reservas`**: Modificado en `src/app/pages/reservas/reservas.ts` y `reservas.html` usando `FormsModule` de Angular y el nuevo control de flujo `@if`/`@else`.
  - **Autenticación real**: Enlazado con la sesión real `'autoescuela_session'` creada por el flujo de registro/login. Si no hay sesión, se muestra el aviso premium con estética negra y naranja neón y botones redireccionables.
  - **Calendario ultra-restringido**: Vinculado `[min]="minFecha"` para bloquear fechas pasadas. En el callback `(change)="validarFecha()"`, cualquier selección de día de la semana que no sea Lunes, Miércoles o Viernes se limpia al instante y avisa al alumno con un alert.
  - **Horarios Organizados**: Opciones agrupadas semánticamente en Mañana (09:00/11:00) y Tarde (16:00/18:00) mediante `<optgroup>`.
  - **Cancelación Real y Feedback Instantáneo**: Botón "Cancelar Práctica" dinámico que limpia el `localStorage` del usuario tras un aviso de confirmación. Adicionalmente, la barra de "Resumen de Prácticas" calcula de forma reactiva el progreso de clases tomadas e indica cuántas prácticas restan para presentarse al examen (base recomendado: 30).
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

### 10. Creación y Conexión de la Pantalla de Registro y Login (localStorage)
* **Objetivo:** Crear un flujo funcional real de Registro y Login en el navegador del cliente utilizando `localStorage`, con validación cruzada de credenciales y cabecera reactiva.
* **Prompt Utilizado:**
  > "Quiero que conectes el formulario de registro y el de inicio de sesión de mi autoescuela para que funcionen de verdad utilizando localStorage. Modifica los archivos HTML y TypeScript (.ts) necesarios para que: 1) Al registrarse, los datos se guarden de forma segura en la memoria del navegador y avise con un alert. 2) Al iniciar sesión, compruebe si el usuario y la contraseña coincidan con lo guardado y le dé la bienvenida. Haz los cambios directamente en los archivos correspondientes."
* **Resultados:**
  - **Componente `Signup`**: Creado y modificado para verificar usuarios duplicados y persistir objetos JSON en la clave `autoescuela_users` de `localStorage`.
  - **Componente `Login`**: Creado en `src/app/pages/login` con formulario reactivo. Busca credenciales por usuario/correo y contraseña contra la lista persistida.
  - **Validaciones de Seguridad & Alertas**: Avisos `alert()` interactivos del navegador tanto al completar el registro como al iniciar sesión con éxito.
  - **Cabecera Reactiva (`Navbar`)**: Modificada para escuchar el estado de la sesión (`autoescuela_session`). Muestra dinámicamente un mensaje de *"¡Hola, [Usuario]! 👋"* y un botón estilizado para cerrar sesión (`logout()`), ocultando los accesos a formularios.
  - **Enrutado y Compilación**: Registradas las rutas `/signup` y `/login` en `app.routes.ts`. Generados bundles estables de pre-renderizado.
  - **Rama Git**: `feat-Sign-in`, subida a GitHub.

### 11. Integración y Mejora de Imagen del Vehículo de Prácticas (Flota Premium)
* **Objetivo:** Tomar el boceto del vehículo de prácticas aportado en `images/image.png`, mejorar su calidad visual a alta definición realista mediante generación IA de activos premium y diseñar una sección dinámica dedicada a la flota ("Nuestra Flota") en la Home.
* **Prompt Utilizado:**
  > "he hecho un coche y lo he puesto en images, me gustaría que lo usaras para decorar la página y que vean que tenemos coches de practicas, no se si es posible que le intente smejorar la calidad"
* **Resultados:**
  - **Mejora IA**: Generado un render 3D hiperrealista y profesional en 8k de un *Volkswagen Golf Premium* blanco con la rotulación oficial *"AUTOESCUELA MATTHEW"*, placa de prácticas L azul en el techo, y luces de estudio, guardado en `public/coche_practicas.png`.
  - **Sección Flota (`home.html` y `home.css`)**: Implementada una sección premium llamada *"Nuestra Flota"* equipada con una tarjeta *Glassmorphic* para el coche, especificaciones técnicas animadas, insignias ecológicas ("Eco-friendly 🌿") e información detallada de ventajas de aprendizaje (seguridad con doble mando, asistentes de conducción en rampa/sensores y uso del mismo coche en el examen).
  - **Rama Git**: `feat-Sign-in`, subida a GitHub.

### 12. Implementación Completa de Reserva de Prácticas (Restricción de Calendario y Cancelaciones)
* **Objetivo:** Hacer 100% funcional el componente de Reserva de Prácticas con verificación de sesión del usuario, validación estricta de calendario y opción de cancelación dinámica.
* **Prompt Utilizado:**
  > "Estoy en mi proyecto de Angular para la Autoescuela Matthew. Quiero hacer 100% funcional el componente de Reserva de Prácticas modificando su HTML y TypeScript (.ts). Aplica las siguientes reglas en el código:
  > 
  > Control de acceso (Login obligatorio): En el archivo .ts, comprueba si existe la clave 'usuarioLogueado' en el localStorage. Si NO existe, el HTML debe ocultar el formulario y mostrar un mensaje elegante en tonos negros y naranjas que diga: '¡Atención alumno! 🚗 Para reservar tus clases prácticas debes iniciar sesión o crear una cuenta.' Añade dos botones que simulen ir a esas pantallas.
  > 
  > Formulario de Reserva (Solo alumnos): Si el usuario SÍ está logueado, muestra el formulario con vuestro estilo visual. Debe incluir:
  > - Un selector de fecha donde solo se permitan seleccionar Lunes, Miércoles y Viernes (añade una validación en el TS para avisar si eligen otro día).
  > - Un selector de horario dividido en: Mañana (09:00 o 11:00) y Tarde (16:00 o 18:00).
  > 
  > Guardar la reserva: Al hacer clic en el botón 'Confirmar Reserva 📅', guarda los datos de la reserva (Día, Hora y el nombre del alumno) dentro de un array en el localStorage llamado 'reservas_autoescuela' para que se queden registrados de verdad. Muestra un alert de éxito que diga '¡Clase reservada con éxito!'."
  > *(Segunda parte)*: "Vale, ahora haz que las practicas se puedan cancelar y que a la hora de elegir el dia cualquier dia que no sea lunes miercoles o viernes sea imposible de seleccionar"
* **Resultados:**
  - **Componente `Reservas`**: Modificado en `src/app/pages/reservas/reservas.ts` y `reservas.html` usando `FormsModule` de Angular y el nuevo control de flujo `@if`/`@else`.
  - **Autenticación real**: Enlazado con la sesión real `'autoescuela_session'` creada por el flujo de registro/login. Si no hay sesión, se muestra el aviso premium con estética negra y naranja neón y botones redireccionables.
  - **Calendario ultra-restringido**: Vinculado `[min]="minFecha"` para bloquear fechas pasadas. En el callback `(change)="validarFecha()"`, cualquier selección de día de la semana que no sea Lunes, Miércoles o Viernes se limpia al instante y avisa al alumno con un alert.
  - **Horarios Organizados**: Opciones agrupadas semánticamente en Mañana (09:00/11:00) y Tarde (16:00/18:00) mediante `<optgroup>`.
  - **Cancelación Real y Feedback Instantáneo**: Botón "Cancelar Práctica" dinámico que limpia el `localStorage` del usuario tras un aviso de confirmación. Adicionalmente, la barra de "Resumen de Prácticas" calcula de forma reactiva el progreso de clases tomadas e indica cuántas prácticas restan para presentarse al examen (base recomendado: 30).

### 13. Integración de Imágenes de Trabajadores y Rediseño Premium de la Sección Conócenos
* **Objetivo:** Remplazar las iniciales de todos los trabajadores por avatares fotográficos reales de alta resolución y reestructurar de manera integral el diseño de las tarjetas para lograr una estética moderna, premium, tridimensional e interactiva.
* **Prompt Utilizado:**
  > "Vale, en la sección de conocenos, necesito que María gonzales tenga una foto, esa foto se encuentra en public y se llama ruth_secretaria. Luego Carlos ruiz (coordinador) necesirto que sea la imagen babaro, y por último javier sancherz la foto jordi"
  > *(Ampliación)*: "Vale, ahora laura martinez ha de ser Davina.png y david lopez paracetamol.png. Tambien mejora el diseño del apatado conocenos para que se va mejor las imagenes"
* **Resultados:**
  - **Componente `Conócenos`**: Modificado en `src/app/pages/conocenos/conocenos.html` y `conocenos.css`.
  - **Asignación Completa de Imágenes (Todo el Equipo)**: Vinculadas imágenes fotográficas para todos los integrantes.
  - **Mejora del Diseño de Avatares y Legibilidad**: Incrementado el tamaño de los avatares a 210px, garantizando su centrado explícito (`margin-inline: auto`) y elevando la claridad de la descripción a `#f1f5f9` para asegurar una óptima lectura sobre el fondo oscuro.

* **2026-05-20 (Sesión 3):** Implementación de la sección de reservas 100% interactiva en la rama `feat-mejorar-reservas`. Integración de validación estricta de días (L-M-V), control de acceso enlazado a `autoescuela_session`, cancelación de reserva dinámica con alertas de seguridad y actualización automática de la barra de progreso de prácticas del alumno en tiempo real.
* **2026-05-20 (Sesión 4):** Asignación de avatares fotográficos completos de alta resolución para todo el personal de la Autoescuela y rediseño interactivo de lujo (tarjetas reactivas 3D, ampliación de avatares a 210px, badges de rol translúcidos, bordes con gradientes dinámicos y mejora de contraste/brillo en descripciones) bajo la rama `feat-Trabajadores-conocenos`.
* **2026-05-20 (Sesión 5):** Saneamiento y resolución de conflictos de diseño en la sección "Conócenos" en `main`. Eliminación de avatares duplicados y SVGs de fallback obsoletos que competían con las fotos reales. Corrección de error de sintaxis por llave de cierre ausente en `.ubicacion-content` que rompía el resto del CSS. Unificación de selectores repetidos para `.rol` e `.h3`, suprimiendo los molestos saltos de tamaño en el efecto de hover para una experiencia fluida y premium. Compilación testeada con éxito mediante `npm run build`.


import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Examen {
  nombre: string;
  tipo: 'teorico' | 'practico' | 'curso';
  detalles: string;
}

export interface Permiso {
  id: string;
  letra: string;
  titulo: string;
  edadMinima: string;
  categoria: 'coche' | 'moto' | 'profesional';
  descripcion: string;
  vehiculos: string[];
  examenes: Examen[];
  detallesAdicionales?: string[];
  destacado?: string;
}

@Component({
  selector: 'app-permisos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './permisos.html',
  styleUrl: './permisos.css',
})
export class Permisos {
  // Lista estructurada de todos los permisos con detalles enriquecidos
  readonly permisos = signal<Permiso[]>([
    {
      id: 'b',
      letra: 'B',
      titulo: 'Carnet de Coche',
      edadMinima: '18 años',
      categoria: 'coche',
      descripcion: 'El carnet más demandado. Te permite conducir la gran mayoría de automóviles convencionales y furgonetas ligeras con total libertad.',
      vehiculos: [
        'Automóviles y vehículos de dos o tres ruedas cuya Masa Máxima Autorizada (MMA) no exceda los 3.500 kg.',
        'Vehículos diseñados para el transporte de no más de 8 pasajeros además del conductor.',
        'Conjunto de vehículos acoplados compuestos por un coche tractor del permiso B y un remolque de hasta 750 kg.',
        'Triciclos y cuadriciclos de motor (a partir de los 21 años para los de más de 15 kW).'
      ],
      examenes: [
        { nombre: 'Teórico Común', tipo: 'teorico', detalles: 'Test oficial de la DGT de 30 preguntas con un máximo de 3 fallos permitidos. ¡Puedes empezar a prepararlo con 17 años y 9 meses!' },
        { nombre: 'Práctico de Circulación', tipo: 'practico', detalles: 'Examen de conducción real de unos 25 minutos por vías urbanas e interurbanas evaluando destreza, seguridad e iniciativa.' }
      ],
      detallesAdicionales: [
        'Única autoescuela de Mallorca sin cobros ocultos de renovación de matrícula.',
        'Prácticas adaptadas a tu zona con instructores experimentados.',
        'Acceso ilimitado a simulador de realidad virtual y tests online 24/7.'
      ],
      destacado: '¡Matrícula Gratis esta semana!'
    },
    {
      id: 'a1',
      letra: 'A1',
      titulo: 'Carnet de Moto Ligera',
      edadMinima: '16 años',
      categoria: 'moto',
      descripcion: 'Tu primer paso en el mundo de las dos ruedas. Ideal para moverte con agilidad por la ciudad sin depender del transporte público.',
      vehiculos: [
        'Motocicletas ligeras con una cilindrada máxima de 125 cm³ y una potencia máxima de 11 kW (aprox. 15 CV).',
        'Triciclos de motor cuya potencia máxima no exceda de 15 kW.',
        'Ciclomotores de cualquier tipo (permiso AM integrado).'
      ],
      examenes: [
        { nombre: 'Teórico Común', tipo: 'teorico', detalles: 'Test de 30 preguntas común (convalidable si ya tienes el permiso B).' },
        { nombre: 'Teórico Específico', tipo: 'teorico', detalles: 'Test específico de motocicleta de 20 preguntas con máximo de 2 fallos.' },
        { nombre: 'Práctico en Circuito Cerrado', tipo: 'practico', detalles: 'Pruebas de destreza en pista cerrada (giro lento, aceleración, frenado de emergencia y esquiva).' },
        { nombre: 'Práctico de Circulación', tipo: 'practico', detalles: 'Examen en vías abiertas al tráfico guiado por el examinador mediante intercomunicador.' }
      ],
      detallesAdicionales: [
        'Posibilidad de elegir entre moto manual (de marchas) o automática (scooter).',
        'Pistas de prácticas idénticas a las del examen de tráfico.',
        'Equipamiento de seguridad premium incluido durante tus prácticas.'
      ]
    },
    {
      id: 'a2',
      letra: 'A2',
      titulo: 'Carnet de Moto Intermedia',
      edadMinima: '18 años',
      categoria: 'moto',
      descripcion: 'La puerta de entrada a motos de media y gran cilindrada. Te permite una versatilidad absoluta tanto en trayectos diarios como en carretera abierta.',
      vehiculos: [
        'Motocicletas con una potencia máxima de 35 kW (aprox. 47 CV).',
        'Relación potencia/peso de un máximo de 0,2 kW/kg.',
        'Motos limitadas que de origen no excedan del doble de la potencia límite (máximo 70 kW de origen).'
      ],
      examenes: [
        { nombre: 'Teóricos (Común y Específico)', tipo: 'teorico', detalles: 'Pruebas teóricas correspondientes (exentas si posees el A1).' },
        { nombre: 'Práctico en Circuito Cerrado', tipo: 'practico', detalles: 'Maniobras y habilidades de conducción en pista rápida y lenta.' },
        { nombre: 'Práctico de Circulación', tipo: 'practico', detalles: 'Prueba en vías públicas con intercomunicador. (Si tienes el A1 con más de 2 años de antigüedad, este examen práctico es el único requisito).' }
      ],
      detallesAdicionales: [
        'Motos modernas, ligeras y fáciles de manejar para que apruebes con total confianza.',
        'Instructores especialistas que te enseñarán técnicas de conducción defensiva real.',
        'Flexibilidad total de horarios para tus clases en pista.'
      ],
      destacado: 'Especialistas en Moto'
    },
    {
      id: 'a',
      letra: 'A',
      titulo: 'Carnet de Moto sin Límite',
      edadMinima: '20 años',
      categoria: 'moto',
      descripcion: 'El carnet definitivo para los amantes de las dos ruedas. Sin restricciones de cilindrada ni potencia. Para conductores experimentados.',
      vehiculos: [
        'Motocicletas de cualquier cilindrada y potencia sin ningún tipo de restricción.',
        'Triciclos de motor que excedan de 15 kW (requiere tener 21 años cumplidos).'
      ],
      examenes: [
        { nombre: 'Curso de Formación A', tipo: 'curso', detalles: 'Curso teórico y práctico de 9 horas de duración. ¡Sin exámenes en la DGT! (3h de teoría, 4h de maniobras en circuito cerrado y 2h de circulación en vías públicas).' }
      ],
      detallesAdicionales: [
        'Requisito: Tener al menos 2 años de antigüedad con el carnet A2.',
        'Curso intensivo que realizamos habitualmente en fin de semana.',
        'Tramitación inmediata del carnet provisional tras finalizar la formación.'
      ]
    },
    {
      id: 'am',
      letra: 'AM',
      titulo: 'Carnet de Ciclomotor',
      edadMinima: '15 años',
      categoria: 'moto',
      descripcion: 'El primer paso legal para circular con tu propio vehículo motorizado. Ideal para jóvenes que necesitan independencia.',
      vehiculos: [
        'Ciclomotores de dos o tres ruedas con un motor de cilindrada no superior a 50 cm³ o motor eléctrico.',
        'Velocidad máxima limitada por construcción a 45 km/h.',
        'Cuadriciclos ligeros (microcoches o "coches sin carnet").'
      ],
      examenes: [
        { nombre: 'Teórico Específico de Ciclomotor', tipo: 'teorico', detalles: 'Test específico de la DGT de 20 preguntas con un máximo de 2 fallos.' },
        { nombre: 'Práctico en Circuito Cerrado', tipo: 'practico', detalles: 'Prueba sencilla de destreza realizando giros y maniobrando en pista cerrada entre líneas paralelas.' }
      ],
      detallesAdicionales: [
        'Elige entre ciclomotor automático (scooter) o manual (con marchas).',
        'Preparación súper rápida: nuestro método interactivo permite aprobar en tiempo récord.',
        'Vehículos ligeros y estables de última generación.'
      ]
    },
    {
      id: 'c',
      letra: 'C',
      titulo: 'Carnet de Camión Rígido',
      edadMinima: '21 años',
      categoria: 'profesional',
      descripcion: 'Una excelente oportunidad laboral. Te capacita para el transporte profesional de mercancías de alto tonelaje en camiones rígidos.',
      vehiculos: [
        'Automóviles (camiones rígidos) cuya Masa Máxima Autorizada (MMA) exceda de 3.500 kg.',
        'Diseñados para transportar no más de 8 pasajeros además del conductor.',
        'Pueden arrastrar un remolque ligero cuya MMA no exceda los 750 kg.'
      ],
      examenes: [
        { nombre: 'Teórico Específico de Camión', tipo: 'teorico', detalles: 'Test específico de 20 preguntas de mantenimiento, pesos, tiempos de conducción y tacógrafo con un máximo de 2 fallos.' },
        { nombre: 'Práctico de Maniobras', tipo: 'practico', detalles: 'Maniobras en circuito cerrado: estacionamiento, marcha atrás en curva y aproximación a muelle de carga.' },
        { nombre: 'Práctico de Circulación', tipo: 'practico', detalles: 'Examen de conducción real en vías urbanas y carreteras simulando una ruta real de transporte.' }
      ],
      detallesAdicionales: [
        'Edad mínima reducible a 18 años si se dispone del CAP de Formación Inicial Ordinaria.',
        'Flota moderna de camiones adaptados con cajas de cambio fluidas e intuitivas.',
        'Alta inserción laboral gracias a nuestros acuerdos con empresas del sector.'
      ],
      destacado: 'Alta Salida Laboral'
    },
    {
      id: 'ce',
      letra: 'C+E',
      titulo: 'Tráiler / Camión con Remolque',
      edadMinima: '21 años',
      categoria: 'profesional',
      descripcion: 'El carnet definitivo para el transporte pesado de larga distancia. Te faculta para conducir trenes de carretera y camiones articulados.',
      vehiculos: [
        'Conjunto de vehículos acoplados compuestos por un camión de la categoría C y un remolque o semirremolque cuya MMA sea superior a 750 kg.',
        'Sin límite de peso total, ideal para transporte logístico nacional e internacional.'
      ],
      examenes: [
        { nombre: 'Teórico Específico C+E', tipo: 'teorico', detalles: 'Test específico de 20 preguntas sobre acoplamiento, frenos de remolque y estabilidad con un máximo de 2 fallos.' },
        { nombre: 'Práctico de Maniobras', tipo: 'practico', detalles: 'Pruebas en circuito cerrado: enganche y desenganche del remolque, marcha atrás en curva y estacionamiento de seguridad.' },
        { nombre: 'Práctico de Circulación', tipo: 'practico', detalles: 'Conducción en vías públicas controlando la longitud y comportamiento del tráiler.' }
      ],
      detallesAdicionales: [
        'Requisito obligatorio: Poseer previamente el carnet de tipo C activo.',
        'Profesores expertos en maniobras de articulados pesados que te darán trucos infalibles.',
        'Gran bolsa de empleo nacional activa para transportistas de esta categoría.'
      ]
    },
    {
      id: 'cap',
      letra: 'CAP',
      titulo: 'Certificado Aptitud Profesional',
      edadMinima: 'Varía según curso',
      categoria: 'profesional',
      descripcion: 'El certificado de aptitud profesional (CAP) es indispensable y obligatorio para todos los conductores que transportan mercancías o viajeros.',
      vehiculos: [
        'Obligatorio junto a los permisos C, C1, D, D1, C+E o D+E para ejercer profesionalmente.',
        'Imprescindible en todo el territorio de la Unión Europea.'
      ],
      examenes: [
        { nombre: 'Formación Inicial (140h)', tipo: 'curso', detalles: 'Curso teórico-práctico obligatorio de 140 horas de duración seguido de un examen tipo test de 100 preguntas de la Conselleria de Transports.' },
        { nombre: 'Formación Continua (35h)', tipo: 'curso', detalles: 'Curso de reciclaje de 35 horas sin examen, obligatorio de realizar cada 5 años para mantener la vigencia de la tarjeta CAP.' }
      ],
      detallesAdicionales: [
        'Aulas tecnológicas de vanguardia homologadas para impartir cursos CAP oficiales.',
        'Cursos flexibles intensivos, en fines de semana o tardes adaptados a profesionales activos.',
        'Bonificable al 100% para trabajadores a través de la Fundación Tripartita (FUNDAE).'
      ],
      destacado: 'Homologado Oficial'
    }
  ]);

  // Permiso seleccionado actualmente (por defecto el B)
  readonly permisoActivoId = signal<string>('b');

  // Filtro de categorías seleccionado ('todos', 'coche', 'moto', 'profesional')
  readonly filtroActivo = signal<string>('todos');

  // Obtener el permiso activo actual
  get permisoActivo(): Permiso {
    return this.permisos().find(p => p.id === this.permisoActivoId()) || this.permisos()[0];
  }

  // Filtrar permisos para los botones superiores del listado/rejilla
  get permisosFiltrados(): Permiso[] {
    const filtro = this.filtroActivo();
    if (filtro === 'todos') {
      return this.permisos();
    }
    return this.permisos().filter(p => p.categoria === filtro);
  }

  // Cambiar el permiso activo en el visor de detalle
  seleccionarPermiso(id: string): void {
    this.permisoActivoId.set(id);
  }

  // Filtrar la categoría de permisos en la lista
  cambiarFiltro(categoria: string): void {
    this.filtroActivo.set(categoria);
    // Si el permiso activo actual no forma parte de la lista filtrada, activamos el primero de la lista filtrada
    const filtrados = this.permisosFiltrados;
    if (filtrados.length > 0 && !filtrados.some(p => p.id === this.permisoActivoId())) {
      this.permisoActivoId.set(filtrados[0].id);
    }
  }
}

import { Component, signal } from '@angular/core';

interface Section {
  title: string;
  text: string;
}

interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  icon: string;
  readTime: string;
  content: {
    introduction: string;
    sections: Section[];
    conclusion: string;
    keys: string[];
  };
}

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  selectedArticle = signal<Article | null>(null);

  articles: Article[] = [
    {
      id: 'fuel-mistake',
      title: '¿Diésel en Gasolina o viceversa? Qué hacer si te equivocas de combustible',
      category: 'Emergencias',
      summary: 'Equivocarse al repostar es más común de lo que crees. Conoce el error crítico que debes evitar a toda costa para no destrozar tu motor y cómo solucionarlo.',
      icon: 'droplet',
      readTime: '4 min',
      content: {
        introduction: 'Luegos de las prisas o una distracción, coges la manguera equivocada y empiezas a repostar. De repente te das cuenta del error. ¿Qué pasa ahora? La diferencia entre una anécdota tonta y una factura de 4.000€ depende enteramente de lo que hagas en los siguientes 5 minutos.',
        sections: [
          {
            title: '1. ¡NO ARRANQUES EL MOTOR bajo ningún concepto!',
            text: 'Este es el consejo más importante. Si no pones el contacto ni arrancas el motor, el combustible equivocado se quedará en el depósito. Si arrancas, el carburante circulará por la bomba de inyección y los inyectores, dañándolos de forma irreversible y sumamente costosa.'
          },
          {
            title: '2. Avisa al personal de la estación',
            text: 'Comunica el error inmediatamente para que puedan bloquear el surtidor si es necesario y ayudarte a mover el coche empujando a una zona segura fuera de la zona de repostaje.'
          },
          {
            title: '3. Llama a tu asistencia en carretera',
            text: 'Debes llamar a la grúa para que traslade tu coche a un taller. Muchos seguros tienen coberturas que cubren el vaciado y la limpieza del depósito en caso de error de combustible.'
          },
          {
            title: '4. ¿Qué es peor: Gasolina en Diésel o Diésel en Gasolina?',
            text: 'Echar gasolina en un coche diésel es sumamente peligroso porque la gasolina actúa como disolvente y destruye la película lubricante que necesita la bomba de gasoil. Echar diésel en un gasolina suele provocar que el coche arranque pero eche mucho humo y se ahogue rápidamente.'
          }
        ],
        conclusion: 'En resumen: mantén la calma, no metas la llave en el contacto, aparta el coche empujando y llama a la grúa. ¡Salvarás tu motor!',
        keys: [
          'No metas la llave en el contacto ni des al botón de arranque.',
          'Pide ayuda para mover el coche empujando.',
          'Contacta con tu seguro para ver si cubre la limpieza de depósito.',
          'No intentes succionar el combustible tú mismo con una manguera.'
        ]
      }
    },
    {
      id: 'winter-driving',
      title: 'Claves para conducir en invierno: Hielo, nieve y lluvia extrema',
      category: 'Técnicas de Conducción',
      summary: 'La carretera se vuelve traicionera con el frío. Aprende a controlar los patinazos, usar las marchas correctas y anticiparte a los peligros invernales.',
      icon: 'snowflake',
      readTime: '5 min',
      content: {
        introduction: 'Conducir con mal tiempo genera mucha inseguridad. El hielo, la nieve y la baja visibilidad exigen un cambio radical en nuestra forma de manejar el vehículo. Aquí te desvelamos las claves de los profesionales para conducir seguro.',
        sections: [
          {
            title: '1. Suavidad milimétrica en los mandos',
            text: 'Cualquier movimiento brusco del volante, acelerador o freno puede hacerte perder la tracción en superficies deslizantes. Acelera de forma progresiva y frena con mucha anticipación.'
          },
          {
            title: '2. Arranca en segunda marcha sobre nieve',
            text: 'Si las ruedas patinan al intentar salir en llano o cuesta arriba sobre nieve, pon segunda marcha y suelta el embrague muy despacio. Esto reduce la fuerza transmitida a las ruedas y facilita el agarre.'
          },
          {
            title: '3. El temido "hielo negro"',
            text: 'Son placas de hielo completamente transparentes que parecen simple asfalto mojado. Desconfía si la temperatura ronda los 0°C y ves zonas sombrías o puentes. Si entras en una, mantén el volante firme, no frenes y levanta el pie del acelerador.'
          },
          {
            title: '4. Multiplica la distancia de seguridad',
            text: 'Sobre suelo mojado, la distancia de frenado se duplica. Con hielo o nieve, ¡puede multiplicarse hasta por diez! Deja siempre espacio de sobra con el coche de delante.'
          }
        ],
        conclusion: 'La mejor herramienta en invierno es la prevención. Revisa el estado de tus neumáticos y lleva siempre cadenas en el maletero.',
        keys: [
          'Aumenta la distancia de seguridad exponencialmente.',
          'Arranca en segunda si estás sobre nieve para evitar que las ruedas patinen.',
          'Evita frenazos bruscos; usa el freno motor siempre que sea posible.',
          'Mantén limpios todos los cristales y luces del coche.'
        ]
      }
    },
    {
      id: 'amaxofobia',
      title: 'Superar el miedo a conducir: Técnicas para vencer la Amaxofobia',
      category: 'Psicología Vial',
      summary: 'El miedo irracional a conducir es más común de lo que crees. Descubre cómo reprogramar tu mente, controlar la ansiedad y recuperar la libertad en carretera.',
      icon: 'activity',
      readTime: '6 min',
      content: {
        introduction: '¿Sientes taquicardia, sudoración o ganas de llorar solo de pensar en conducir por autopista o entrar en una rotonda con tráfico? No estás solo. La amaxofobia afecta a miles de personas, pero tiene solución con paciencia y las técnicas adecuadas.',
        sections: [
          {
            title: '1. Entiende y acepta tu miedo',
            text: 'El miedo es una emoción útil que nos protege del peligro, pero a veces se descalibra y detecta amenazas donde no las hay. Aceptar que tienes miedo sin juzgarte es el primer paso para rebajar la tensión.'
          },
          {
            title: '2. Respiración diafragmática',
            text: 'Cuando la ansiedad sube, respiramos rápido y superficialmente, lo que manda señales de alarma al cerebro. Practica respirar inflando el abdomen: inspira en 4 segundos, mantén 2 y expira lentamente en 6 segundos. Hazlo antes de arrancar y en los semáforos.'
          },
          {
            title: '3. Exposición progresiva y planificada',
            text: 'No intentes superar el miedo conduciendo en hora punta el primer día. Empieza por sentarte en el coche apagado, luego da una vuelta a la marcha en una zona tranquila, después conduce con un acompañante de confianza, y ve subiendo la dificultad muy poco a poco.'
          },
          {
            title: '4. Háblate bien (Auto-instrucciones)',
            text: 'Sustituye pensamientos catastróficos como "voy a chocar" por datos objetivos: "tengo carnet, sé controlar el coche, si voy despacio y a mi ritmo todo saldrá bien".'
          }
        ],
        conclusion: 'Superar la amaxofobia es una carrera de fondo. Si sientes que te supera, no dudes en buscar profesionales (psicólogos o autoescuelas especializadas en amaxofobia).',
        keys: [
          'Comienza con trayectos cortos y muy fáciles.',
          'Utiliza técnicas de respiración controlada para bajar pulsaciones.',
          'Evita la cafeína y estimulantes antes de conducir.',
          'Felicítate por cada pequeño logro, por mínimo que parezca.'
        ]
      }
    },
    {
      id: 'pets-in-car',
      title: 'Llevar mascotas en el coche: Normas y sistemas de seguridad',
      category: 'Normativa y Seguridad',
      summary: '¿Llevas a tu perro suelto en el asiento de atrás? Aparte de ser muy peligroso, te enfrentas a multas graves. Descubre cómo viajar seguro con tus mejores amigos.',
      icon: 'shield',
      readTime: '4 min',
      content: {
        introduction: 'Nos encanta viajar con nuestras mascotas, pero la seguridad es lo primero. En caso de accidente a tan solo 50 km/h, el peso de un perro suelto se multiplica por 35, convirtiéndose en un proyectil mortal para él y para los pasajeros.',
        sections: [
          {
            title: '1. La normativa de la DGT',
            text: 'La ley de tráfico especifica que el conductor debe mantener su libertad de movimientos y que los objetos o animales transportados no deben interferir con el conductor. Llevar un animal suelto se considera infracción grave.'
          },
          {
            title: '2. Arnés de doble enganche con cinturón corto',
            text: 'Es ideal para perros medianos. Debe ir sujeto a los anclajes del cinturón de seguridad de los asientos traseros. Nunca uses un arnés simple de un solo enganche ni lo enganches al collar del perro (podría causarle lesiones graves en el cuello).'
          },
          {
            title: '3. El transportín: el método más seguro',
            text: 'Para mascotas pequeñas, lo mejor es colocar el transportín en el suelo del coche, detrás de los asientos delanteros. Para perros grandes, el transportín debe ir en el maletero colocado en sentido transversal a la marcha.'
          },
          {
            title: '4. Rejilla divisoria',
            text: 'Ideal para maleteros grandes en vehículos familiares. Permite que el perro se mueva con relativa libertad en el maletero sin posibilidad de acceder a la zona de pasajeros.'
          }
        ],
        conclusion: 'Viajar seguro con tu mascota no solo te evita multas de hasta 500€, sino que protege la vida de todos los ocupantes del vehículo.',
        keys: [
          'Nunca dejes a tu mascota suelta dentro del habitáculo.',
          'El transportín en el suelo es el lugar más seguro para mascotas pequeñas.',
          'Haz paradas cada 2 horas para hidratación y descanso.',
          'Nunca dejes al animal en el coche cerrado bajo el sol.'
        ]
      }
    },
    {
      id: 'aquaplaning',
      title: 'Aquaplaning: El peligro del agua sobre el asfalto',
      category: 'Emergencias',
      summary: 'Ese temido instante en el que los neumáticos flotan sobre el agua y el coche no responde al volante. Aprende la maniobra correcta para recuperar el control.',
      icon: 'wind',
      readTime: '3 min',
      content: {
        introduction: 'El aquaplaning ocurre cuando los neumáticos no son capaces de evacuar toda el agua que hay en la calzada, creando una película de agua que separa la rueda del suelo. Perder la dirección del coche asusta mucho, pero saber reaccionar te salvará del accidente.',
        sections: [
          {
            title: '1. El error fatal: Frenar a fondo',
            text: 'Si frenas a fondo mientras el coche flota, las ruedas se bloquearán. Cuando el neumático vuelva a tocar el asfalto firme, el coche dará un bandazo incontrolable que puede acabar en vuelco o trompo.'
          },
          {
            title: '2. Sujeta el volante con firmeza',
            text: 'Mantén las ruedas apuntando hacia la dirección de la carretera. No intentes girar bruscamente para corregir la trayectoria.'
          },
          {
            title: '3. Levanta el pie del acelerador suavemente',
            text: 'Al dejar de acelerar, el propio motor irá reteniendo el coche y reduciendo la velocidad de forma progresiva hasta que el peso del vehículo rompa la película de agua.'
          },
          {
            title: '4. Desembraga (en coches manuales)',
            text: 'Pisar el embrague a fondo desacopla el motor de las ruedas, permitiendo que estas giren libremente y facilitando que vuelvan a morder el asfalto en cuanto disminuya el agua.'
          }
        ],
        conclusion: 'Prevé el aquaplaning reduciendo la velocidad cuando llueva con fuerza y manteniendo la presión y dibujo de tus neumáticos en perfecto estado.',
        keys: [
          'No pises el freno bajo ningún concepto mientras flotes.',
          'Sujeta el volante recto y firme con ambas manos.',
          'Levanta el pie del acelerador progresivamente.',
          'Pisa el embrague para liberar la tracción de las ruedas.'
        ]
      }
    },
    {
      id: 'roundabouts-guide',
      title: 'El mito de las rotondas: ¿Cómo circular correctamente sin tener un golpe?',
      category: 'Normativa',
      summary: 'Las glorietas son uno de los puntos negros de colisiones menores en ciudad. Te enseñamos las reglas de oro para entrar, circular y salir sin riesgos.',
      icon: 'refresh-cw',
      readTime: '5 min',
      content: {
        introduction: 'Aunque parezcan complicadas, las rotondas se rigen por las mismas normas que cualquier otra carretera de varios carriles. El problema es que muchos conductores inventan sus propias reglas. Vamos a despejar todas las dudas.',
        sections: [
          {
            title: '1. ¿Quién tiene la prioridad de paso?',
            text: 'Los vehículos que ya están circulando por el interior de la rotonda tienen prioridad absoluta sobre los que pretenden entrar. Si hay tráfico, detente antes de la línea de ceda el paso.'
          },
          {
            title: '2. ¿Qué carril debo elegir?',
            text: 'Como norma general, circula por el carril exterior (el de la derecha). Si vas a tomar las primeras salidas, colócate a la derecha. Si vas a hacer un cambio de sentido o salir por las últimas salidas, puedes usar los carriles interiores para agilizar, pero recuerda cambiarte al exterior antes de salir.'
          },
          {
            title: '3. Para salir, SIEMPRE desde el carril exterior',
            text: 'Esta es la norma más vulnerada. Nunca se puede abandonar una rotonda directamente desde un carril interior cruzándote delante de otros coches. Si estás en el carril interior y no puedes cambiarte al exterior de forma segura porque hay tráfico, da otra vuelta completa a la rotonda.'
          },
          {
            title: '4. El uso correcto de los intermitentes',
            text: 'No pongas el intermitente para entrar en la rotonda. Tampoco lo lleves puesto a la izquierda para decir "que sigues dentro". Solo debes usar el intermitente derecho para avisar del cambio de carril al exterior y para señalizar la salida inmediata.'
          }
        ],
        conclusion: 'Circular por rotondas es sencillo si sigues la regla de oro: sal siempre desde el carril de fuera y respeta el carril de los demás.',
        keys: [
          'La prioridad es de quien ya está circulando dentro.',
          'Sal de la rotonda única y exclusivamente desde el carril exterior.',
          'Si te quedas atrapado en el interior, da otra vuelta; nunca te cruces.',
          'Usa el intermitente derecho solo para indicar que vas a salir o cambiar de carril.'
        ]
      }
    }
  ];

  selectArticle(article: Article) {
    this.selectedArticle.set(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeArticle() {
    this.selectedArticle.set(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

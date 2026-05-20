import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Option {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  category: string;
  text: string;
  options: Option[];
}

@Component({
  selector: 'app-temario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temario.html',
  styleUrl: './temario.css',
})
export class Temario {
  questions: Question[] = [
    { id: 1, category: 'Velocidad', text: '¿Cuál es la velocidad máxima en una autovía para un turismo?', options: [{ text: '120 km/h', isCorrect: true }, { text: '100 km/h', isCorrect: false }, { text: '90 km/h', isCorrect: false }] },
    { id: 2, category: 'Alcohol', text: '¿Cuál es la tasa de alcohol máxima permitida para un conductor novel en sangre?', options: [{ text: '0,30 g/l', isCorrect: true }, { text: '0,50 g/l', isCorrect: false }, { text: '0,15 g/l', isCorrect: false }] },
    { id: 3, category: 'Prioridad', text: 'En una intersección sin señalizar, ¿a quién debe ceder el paso?', options: [{ text: 'A los vehículos que se aproximen por la derecha', isCorrect: true }, { text: 'A los vehículos que se aproximen por la izquierda', isCorrect: false }, { text: 'Al vehículo más grande', isCorrect: false }] },
    { id: 4, category: 'Alumbrado', text: '¿Cuándo es obligatorio encender las luces de cruce?', options: [{ text: 'Entre el ocaso y la salida del sol', isCorrect: true }, { text: 'Siempre, a cualquier hora del día', isCorrect: false }, { text: 'Sólo cuando llueve', isCorrect: false }] },
    { id: 5, category: 'Seguridad', text: 'El uso del cinturón de seguridad es obligatorio...', options: [{ text: 'En todas las vías y para todos los ocupantes', isCorrect: true }, { text: 'Sólo en vías interurbanas', isCorrect: false }, { text: 'Sólo para el conductor y el copiloto', isCorrect: false }] },
    { id: 6, category: 'Señales', text: 'Una señal triangular con borde rojo indica:', options: [{ text: 'Peligro', isCorrect: true }, { text: 'Prohibición', isCorrect: false }, { text: 'Obligación', isCorrect: false }] },
    { id: 7, category: 'Adelantamiento', text: '¿Por dónde se debe adelantar en una autovía?', options: [{ text: 'Por el carril izquierdo', isCorrect: true }, { text: 'Por el carril derecho', isCorrect: false }, { text: 'Por el arcén', isCorrect: false }] },
    { id: 8, category: 'Estacionamiento', text: '¿Se puede aparcar en un paso de cebra?', options: [{ text: 'No, está prohibido', isCorrect: true }, { text: 'Sí, si es por menos de dos minutos', isCorrect: false }, { text: 'Sí, si me quedo dentro del coche', isCorrect: false }] },
    { id: 9, category: 'Vehículos', text: '¿Cuándo debe pasar la primera ITV un turismo nuevo?', options: [{ text: 'A los 4 años', isCorrect: true }, { text: 'A los 2 años', isCorrect: false }, { text: 'A los 5 años', isCorrect: false }] },
    { id: 10, category: 'Distancia', text: 'La distancia de seguridad debe ser suficiente para...', options: [{ text: 'Detener el vehículo sin colisionar en caso de frenada brusca', isCorrect: true }, { text: 'Poder adelantar al vehículo que nos precede', isCorrect: false }, { text: 'Ver la matrícula del vehículo de delante', isCorrect: false }] },
    { id: 11, category: 'Móvil', text: '¿Está permitido usar el móvil conduciendo si se sujeta con la mano?', options: [{ text: 'No, bajo ninguna circunstancia', isCorrect: true }, { text: 'Sí, si estoy detenido en un semáforo', isCorrect: false }, { text: 'Sí, para enviar notas de voz', isCorrect: false }] },
    { id: 12, category: 'Documentación', text: '¿Es obligatorio llevar en el coche el recibo del seguro?', options: [{ text: 'No, pero es recomendable', isCorrect: true }, { text: 'Sí, siempre', isCorrect: false }, { text: 'Sólo si viajo al extranjero', isCorrect: false }] },
    { id: 13, category: 'Velocidad', text: 'Velocidad mínima en autopista para un turismo:', options: [{ text: '60 km/h', isCorrect: true }, { text: '80 km/h', isCorrect: false }, { text: '50 km/h', isCorrect: false }] },
    { id: 14, category: 'Seguridad', text: 'Los reposacabezas deben estar ajustados de forma que su parte superior quede...', options: [{ text: 'A la altura de la parte superior de la cabeza', isCorrect: true }, { text: 'A la altura del cuello', isCorrect: false }, { text: 'Por encima de la cabeza', isCorrect: false }] },
    { id: 15, category: 'Conducción', text: 'Si nota que los frenos se mojan tras pasar un charco profundo, debe:', options: [{ text: 'Pisar el pedal del freno suavemente varias veces', isCorrect: true }, { text: 'Acelerar para que se sequen con el aire', isCorrect: false }, { text: 'Parar inmediatamente y llamar a la grúa', isCorrect: false }] },
    { id: 16, category: 'Primeros Auxilios', text: 'En caso de accidente, ¿cuál es el orden de actuación (PAS)?', options: [{ text: 'Proteger, Avisar, Socorrer', isCorrect: true }, { text: 'Prevenir, Ayudar, Salvar', isCorrect: false }, { text: 'Parar, Avisar, Socorrer', isCorrect: false }] },
    { id: 17, category: 'Señales', text: 'Un semáforo amarillo intermitente le obliga a:', options: [{ text: 'Extremar la precaución y ceder el paso', isCorrect: true }, { text: 'Detenerse siempre', isCorrect: false }, { text: 'Acelerar para pasar antes de que se ponga rojo', isCorrect: false }] },
    { id: 18, category: 'Vehículos', text: 'Un ciclomotor de dos ruedas, ¿es considerado un vehículo de motor?', options: [{ text: 'No', isCorrect: true }, { text: 'Sí', isCorrect: false }, { text: 'Sólo si supera los 50 cc', isCorrect: false }] },
    { id: 19, category: 'Vías', text: 'La línea continua en el centro de la calzada significa:', options: [{ text: 'Que no debe ser rebasada', isCorrect: true }, { text: 'Que puede ser rebasada para adelantar', isCorrect: false }, { text: 'Que es una vía de doble sentido', isCorrect: false }] },
    { id: 20, category: 'Peatones', text: 'Al aproximarse a un paso para peatones sin semáforo, usted debe:', options: [{ text: 'Moderar la velocidad y ceder el paso si hay peatones esperando', isCorrect: true }, { text: 'Tocar el claxon para avisar', isCorrect: false }, { text: 'Mantener la velocidad y pasar primero', isCorrect: false }] },
    { id: 21, category: 'Maniobras', text: 'Para incorporarse a la circulación desde un estacionamiento, ¿debe ceder el paso?', options: [{ text: 'Sí, a todos los vehículos', isCorrect: true }, { text: 'No, tengo prioridad', isCorrect: false }, { text: 'Sólo a los vehículos pesados', isCorrect: false }] },
    { id: 22, category: 'Neumáticos', text: 'La profundidad mínima de las ranuras del neumático en un turismo es de:', options: [{ text: '1,6 milímetros', isCorrect: true }, { text: '2,0 milímetros', isCorrect: false }, { text: '1,0 milímetros', isCorrect: false }] },
    { id: 23, category: 'Chaleco', text: 'El chaleco reflectante debe llevarse:', options: [{ text: 'En el interior del habitáculo', isCorrect: true }, { text: 'En el maletero', isCorrect: false }, { text: 'Puesto mientras se conduce', isCorrect: false }] },
    { id: 24, category: 'Niebla', text: 'Con niebla densa, ¿qué luces debe utilizar?', options: [{ text: 'Antiniebla delantera y trasera, o al menos luz de cruce y antiniebla trasera', isCorrect: true }, { text: 'Luz larga para ver mejor', isCorrect: false }, { text: 'Sólo las luces de posición', isCorrect: false }] },
    { id: 25, category: 'Glorietas', text: 'En una glorieta, ¿quién tiene prioridad de paso por norma general?', options: [{ text: 'El vehículo que ya está dentro de la glorieta', isCorrect: true }, { text: 'El vehículo que entra por la derecha', isCorrect: false }, { text: 'El vehículo más rápido', isCorrect: false }] },
    { id: 26, category: 'Conductor', text: 'La fatiga al volante provoca que el tiempo de reacción...', options: [{ text: 'Aumente', isCorrect: true }, { text: 'Disminuya', isCorrect: false }, { text: 'Se mantenga igual', isCorrect: false }] },
    { id: 27, category: 'Adelantamiento', text: '¿Se puede adelantar en un túnel de un solo carril para su sentido?', options: [{ text: 'No, está prohibido', isCorrect: true }, { text: 'Sí, si hay visibilidad', isCorrect: false }, { text: 'Sí, si voy a más de 80 km/h', isCorrect: false }] },
    { id: 28, category: 'Distintivo', text: 'La "L" de conductor novel debe llevarse:', options: [{ text: 'Durante 1 año', isCorrect: true }, { text: 'Durante 2 años', isCorrect: false }, { text: 'Durante 6 meses', isCorrect: false }] },
    { id: 29, category: 'Alcohol', text: 'El alcohol, ¿afecta a todos los conductores por igual?', options: [{ text: 'No, depende de factores como peso, edad, sexo y hábito', isCorrect: true }, { text: 'Sí, siempre tiene el mismo efecto', isCorrect: false }, { text: 'Sólo afecta más a las mujeres', isCorrect: false }] },
    { id: 30, category: 'Carga', text: 'En un turismo, la carga puede sobresalir por la parte posterior hasta un...', options: [{ text: '10% si es divisible y 15% si es indivisible', isCorrect: true }, { text: '5% si es divisible', isCorrect: false }, { text: 'No puede sobresalir nunca', isCorrect: false }] }
  ];

  currentIndex: number = 0;
  answers: (number | null)[] = Array(30).fill(null);
  showResults: boolean = false;

  constructor() {
    this.shuffleAllOptions();
  }

  shuffleAllOptions(): void {
    this.questions.forEach(q => {
      q.options = this.shuffleArray(q.options);
    });
  }

  shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  get currentQuestion(): Question {
    return this.questions[this.currentIndex];
  }

  get answeredCount(): number {
    return this.answers.filter(a => a !== null).length;
  }

  get correctCount(): number {
    return this.answers.reduce((count: number, answerIndex, questionIndex) => {
      if (answerIndex !== null && this.questions[questionIndex].options[answerIndex].isCorrect) {
        return count + 1;
      }
      return count;
    }, 0);
  }

  get errorsCount(): number {
    return this.answeredCount - this.correctCount;
  }

  get totalErrors(): number {
    return 30 - this.correctCount;
  }

  selectOption(optionIndex: number): void {
    if (this.showResults) return;
    this.answers[this.currentIndex] = optionIndex;
  }

  nextQuestion(): void {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  prevQuestion(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goToQuestion(index: number): void {
    this.currentIndex = index;
  }

  finishTest(): void {
    this.showResults = true;
  }

  restartTest(): void {
    this.currentIndex = 0;
    this.answers = Array(30).fill(null);
    this.showResults = false;
    this.shuffleAllOptions();
  }

  isCorrect(qIndex: number): boolean {
    const ans = this.answers[qIndex];
    return ans !== null ? this.questions[qIndex].options[ans].isCorrect : false;
  }

  isWrong(qIndex: number): boolean {
    const ans = this.answers[qIndex];
    return ans !== null ? !this.questions[qIndex].options[ans].isCorrect : false;
  }
}


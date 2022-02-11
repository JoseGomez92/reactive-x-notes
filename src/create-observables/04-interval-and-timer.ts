import { interval, Observer, timer } from 'rxjs'

// --------------------------------------------- Interval ---------------------------------------------

/**
 * La funcion interval retorna un Observer asincrono el cual emite valores desde cero incrementando de 1 en 1
 * dichos valores hasta el fin de los tiempos distanciando la emision de dichos valores el tiempo indicado
 * en milisegundos.
 */
const interval$ = interval(1000)

const observer = (baseMessage: string): Observer<number> => {
    return {
        next: value => console.log(`${baseMessage}: `, value),
        error: err => console.error('Error: ', err),
        complete: () => console.info(`Completed ${baseMessage}`)
    }
}

console.log('Inicio del interval')
interval$.subscribe(observer('Interval'));
console.log('Fin del interval')

// --------------------------------------------- Timer ---------------------------------------------

/**
 * La funcion timer crea un Observable asincrono el cual emite el valor despues del intervalo de tiempo especificado
 * para despues completarse.
 */
const timer$ = timer(500)

console.log('Inicio del timer')
timer$.subscribe(observer('Timer'))
console.log('Fin del timer')

/**
 * Ademas podemos pasar un segundo argumento el cual indicara cada cuanto se ejecutara el timer, por lo que en este caso:
 * - Arg 1: Especifica el delay en que se lanzara el timer.
 * - Arg 2: Especifica cada cuanto emitira el valor.
 */
const timer2$ = timer(500, 1000);

timer2$.subscribe(observer('Timer 2'));

/**
 * Tambien podemos especificar la fecha en la que queremos que se lanze el timer.
 */
const currentDate = new Date();
const scheduledDate = new Date(currentDate.setSeconds(currentDate.getSeconds() + 10));

const timer3$ = timer(scheduledDate);

timer3$.subscribe(observer('Scheduled Timer 3'));


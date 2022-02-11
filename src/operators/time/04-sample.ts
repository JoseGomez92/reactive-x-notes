import { fromEvent, interval, sample, tap } from "rxjs";

const output = document.createElement('output')
document.querySelector('body').append(output)


const interval$ = interval(1000);
const click$ = fromEvent(document, 'click');


interval$.pipe(
    tap(value => console.log(value)),
    /**
     * El operador sample esencialmente hace de llave de para el observable sobre 
     * el que actua, de tal forma que si el observable que recibe como argumento no
     * emite ningun valor entonces el subscriptor no recibirá nada. Una vez que el 
     * observable que recibe como argumento emite algun valor entonces el operador
     * pasara a los suscribers el ultimo valor del observable sobre el que actua.
     * 
     * En resumen sample corta las emisiones del observable hasta que el observable 
     * que tiene como argumento no emita ningun valor.
     */
    sample(click$)
).subscribe((value) => output.value = value.toString())
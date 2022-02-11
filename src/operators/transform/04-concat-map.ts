import { concatMap, fromEvent, interval, take } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');
const interval$ = interval(500).pipe(take(3));

click$.pipe(
    // El operador ConcatMap es un operador de aplamiento que esencialmente lo que hace
    // es recibir una funcion la cual retorna un Observable para asi manejar internamente este
    // con la diferencia de que en este caso, los valores emitidos por los  observables generados 
    // a partir de la emision del observable source se van encolando. Esto es, hasta que el primer
    // observable no se complete, el concatMap no emitira los valores que genera el siguiente observable
    // y así sucesivamente, es decir, se van concatenando los valores emitidos por los observables que 
    // gestiona internamente a medida que estos se van completando.
    concatMap(() => interval$)
).subscribe(console.log);
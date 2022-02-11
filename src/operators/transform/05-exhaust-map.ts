import { exhaustMap, fromEvent, interval, take } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');
const interval$ = interval(500).pipe(take(3));

click$.pipe(
    // El ExhaustMap lo que hace es subscribirse internamente al Observable que retorna
    // la funcion que recibe, de tal forma que si el Observable fuente emite un valor y 
    // el Observable interno que esta manejando el ExhaustMap aun no se ha completado, dicho
    // operador omitirá el nuevo Observable. Es decir, no manejará un nuevo Observable hasta que 
    // el que esta manejando se haya completado.
    exhaustMap(() => interval$)
).subscribe(console.log);
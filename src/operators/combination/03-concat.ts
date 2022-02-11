import { concat, from, interval, take } from "rxjs";

const interval$ = interval(500);

// La funcion Concat recibe como argumentos Observables o valores y va pasando los valores
// que recibe de forma secuencial a los subscribers, esto es, que a medida que se vayan completando
// los Observables o emitiendo los valores, se iran pasando a los subscribers.
const numbers$ = concat(
    interval$.pipe(take(2)),
    from([10, 11, 12]),
    interval$.pipe(take(3)),
    [100, 1001, 1000]
);

numbers$.subscribe(console.log);

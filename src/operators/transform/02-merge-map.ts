import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";

const letters$ = of("a", "b", "c");

letters$
  .pipe(
    // El operador de aplanamiento MergeMap lo que hace es que por cada
    // valor que recibe genera un nuevo observable para así al final se
    // generen tantos observables como valores emita el observable fuente (source),
    // siempre y cuando dichos observables no se completen logicamente.
    
    // De esta manera podemos generar nuevos observables a partir de uno unico y combinar
    // la salida (valores emitidos) de todos estos en uno solo.
    mergeMap((letter) =>
      interval(1000).pipe(
        map((number) =>`Emision from letter <${letter}> and interval value <${number}>`),
        take(3)
      )
    )
  )
  .subscribe({
    next: (val) => console.log("Next: ", val),
    complete: () => console.log("Complete"),
  });

const mouseDown$ = fromEvent(document, "mousedown");
const mouseUp$ = fromEvent(document, "mouseup");
const interval$ = interval();

mouseDown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseUp$))))
  .subscribe(console.log);

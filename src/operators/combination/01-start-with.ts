import { of, startWith } from "rxjs";

const numbers$ = of(1, 2, 3).pipe(
    // Mediante el operador de combinacion StartWith lo que haremos será
    // modificar los valores resultantes emitidos por el Observable para 
    // que el primer valor o valores emitidos sea el que recibe como argumento dicho operador.
    startWith('Start')
);

numbers$.subscribe(console.log)
import { endWith, of } from "rxjs";

const numbers$ = of(1, 2, 3).pipe(
    // El operador de combinacion EndWidth hace lo mismo que StartWith
    // con la diferencia de que EndWith añade el valor justo despues de la ultima
    // emision del observable, es decir, justo cuando este se ha completado internamente.
    endWith('Finished!')
);

numbers$.subscribe(console.log);
import { range, reduce } from "rxjs";

const range$ = range(7, 15);

const reduced$ = range$.pipe(
    /**
     * El operador Reduce nos permite aplicar una funcion reductora (acumuladora)
     * a los valores emitidos por nuestro Observable desde el momento de la suscripcion hasta
     * que el observable se completa.
     * 
     * Es decir, toma los valores emitidos desde el momento en que se aplica hasta el complete 
     * del Observable y los reduce para luego emitir dicho resultado.
     */
    reduce((acc, value) => acc + value, 0)
);

reduced$.subscribe((value) => console.log('Total Value: ', value));
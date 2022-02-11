import { from, Observable, scan } from "rxjs";

const values = [1,3,5,77,99,2]

const from$: Observable<number> = from<number[]>(values);

const scan$ = from$.pipe(
    /**
     * El operador Scan es similar al Reduce ya que ambos aplican una
     * funcion de reduccion sobre los valores que reciben, con la diferencia de que
     * el operador Scan va emitiendo los valores acumulados por cada valor que el
     * Observable emite.
     * 
     * Es similar a Reduce con la diferencia de que cada valor acumulado es emitido,
     * es decir, no espera al complete del Observable.
     */
    scan((acc, value) => acc + value, 0)
)

scan$.subscribe((value) => console.log('Accumulated value: ', value))
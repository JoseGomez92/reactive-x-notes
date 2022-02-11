import { map, of, take, tap } from "rxjs";

const numbers$ = of(1,2,3,4,5)


const convertedNumbers$ = numbers$.pipe(
    /**
     * Mediante el tap podemos ver como aunque el take se realice sobre un 
     * "observable modificado", es decir, el resultado de la subscripcion al aplicar
     * el map, en este Observable, es este el que se completa como resultado de aplicar
     * el tap.
     */
    tap((value) => console.log('Before conversion: ', value)),
    map(value => value * -2)
)

convertedNumbers$.pipe(
    /**
     * El operador take permite tomar solo la cantida de valores indicados en el valor
     * que recibe como argumento, para que una vez has sido emitidos se complete el Observable
     * sobre el que se aplica dicho operador. 
     * 
     * Es decir, toma la cantidad de valores indicada y una vez que han sido emitidos "mata" al
     * observable (llama al metodo complete de este).
     */
    take(3)
).subscribe({
    next: value => console.log('Next: ', value),
    complete: () => console.log('Complete')
})
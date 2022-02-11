import { Observable, of } from 'rxjs'

/**
 * La funcion of permite crear un observable sincrono que emite los valores
 * que recibe de forma secuencial.
 */
const obs$: Observable<number> = of(...[1,2,3,4,5,6],7,8,9,10);

obs$.subscribe({
    next: value => console.log('Value: ', value), 
    error: null, 
    complete: () => console.log('Complete!')
})
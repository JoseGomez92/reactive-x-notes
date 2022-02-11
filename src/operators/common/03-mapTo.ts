import { from, mapTo, Observable } from "rxjs";

const from$: Observable<number> = from([1,2,3,4,5,6,7,8,9])

const mapToString$ = from$.pipe(
    /**
     * Mediante el operador mapTo podemos fijar la salida que emite un observable a otro tipo.
     * 
     * En este caso a un string, aunque logicamente podria ser un objeto o cualquier otro.
     */
    mapTo<string>('Value has been emited')
)

mapToString$.subscribe(console.log);

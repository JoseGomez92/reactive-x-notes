import { map, range, tap } from "rxjs";

const numbers$ = range(5, 10);

numbers$
.pipe(
    /**
     * Mediante el operador Tap podemos "disparar" side effects sin afectar al flujo de los
     * valores emitidos por el Observable, es decir, el operador Tap no realiza transformaciones
     * en el flujo de datos del observable, solo se usa para realizar acciones derivadas de las
     * emisiones del Observable.
     * 
     * En este caso el side effect es imprimir en consola.
     */
    tap<number>(value => console.log('In First tap: ', value)),
    /**
     * Podemos observar como hemos encadenado los operadores de forma sencilla.
     */
    map<number, number>(value => value * -1),
    /**
     * El operador Tap lo que recibe como argumento realmente es un Observer, ya que como se comenta
     * arriba, no se modifican los valores emitidos si no que sive para realizar side effects.
     */
    tap<number>({
        next: value => console.log('In Second tap: ', value),
        complete: () => console.log('Observable was finished')
    })
)
.subscribe(value => console.log('In subscriber: ', value))
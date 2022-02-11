import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators'

range(1,5)
.pipe(
    /**
     * Mediante el operador Map, podemos convertir el flujo que devuelve un observable (sus valores emitidos)
     * de un tipo a otro, por lo que mediante este se hace muy sencillo el modificar dichos flujos.
     * 
     * En resumen, el operador Map permite modificar el tipo de dato devuelto por un Observable de un tipo a otro.
     */
    map<number, string>((value) => {
        return (value * 10).toString();
    })
)
.subscribe(console.log);



const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

// Convertimos el evento en bruto para que ahora solo se devuelva el codigo de la tecla pulsada.
const keyupCode$ = keyup$.pipe(map(event => event.code))

keyupCode$.subscribe((value) => console.log('Key code: ', value));
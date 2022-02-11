import { fromEvent, pluck } from "rxjs";

const key$ = fromEvent<KeyboardEvent>(document, 'keyup')

key$.subscribe((event) => console.log('Raw Event: ', event)); // Imprimimos el evento en bruto

const baseUri$ = key$.pipe(
    /**
     * Mediante el operador pluck podemos "bucear" en las properties de un objeto para retornar
     * solo las que nos interesen. 
     * 
     * En este caso entramos a la propiedad target en la raiz del objeto para luego irnos a la baseURI
     * en dicho target.
     */
    pluck('target', 'baseURI')
);

baseUri$.subscribe((baseUri) => console.log('Base URI: ', baseUri))


import { fromEvent, pluck, throttleTime } from "rxjs";

const input = document.createElement('input');
const output = document.createElement('output')
document.querySelector('body').append(input);
document.querySelector('body').append(output)


const inputKeyUp$ = fromEvent(input, 'keyup')


inputKeyUp$.pipe(
    /**
     * El operador throttleTime lo que hace es emitir el primer valor del observable,
     * y una vez pasado el tiempo que recibe como argumento vuelve a emitir
     * el valor que haya emitido el observable para volver a esperar otra vez dicho tiempo
     * y emitir el valor sucesivamente.
     * 
     * El operador throttleTime tambien puede ser modificado para (mediante los argumentos 
     * que recibe) para comportarse de forma similar al operador debounceTime.
     */
    throttleTime(1500),
    pluck('target', 'value')
).subscribe((value) => {
    output.value = value as string;
})
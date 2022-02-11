import { debounceTime, fromEvent, pluck } from "rxjs";

const input = document.createElement('input');
const output = document.createElement('output')
document.querySelector('body').append(input);
document.querySelector('body').append(output)


const inputKeyUp$ = fromEvent(input, 'keyup')


inputKeyUp$.pipe(
    /**
     * Mediante el operador debounce time podemos 'retrasar' la emision de valores el tiempo
     * que le indiquemos a este, de tal forma que si el observable sobre el que actua emite
     * una cantidad valores X durante el tiempo indicado en el debounce, el operador debounceTime
     * solo emitirá el ultimo de dichos X valores una vez que haya pasado ese tiempo (1,5 segs en este caso).
     */
    debounceTime(1500),
    pluck('target', 'value')
).subscribe((value) => {
    output.value = value as string;
})
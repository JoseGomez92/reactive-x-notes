import { fromEvent, pluck, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");
const textInput = document.createElement("input");
body.append(textInput);


const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


const url = 'https://httpbin.org/delay/1?arg='

input$.pipe(
    pluck('target', 'value'),
    // El operador SwitchMap se suscribe internamente al Observable retornado
    // por la funcion que recibe. Al igual que el MergeMap, se genera un observable 
    // diferente por cada emision del observable fuente, con la diferencia de que el SwitchMap
    // completa el observable previo al generado por el ultimo valor que emite el observable 
    // fuente, de tal forma que internamente SwitchMap solo manejara un Observable simultaneamente.
    switchMap(text => ajax.getJSON(url + text))
).subscribe(console.log);
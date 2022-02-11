import { fromEvent, merge } from "rxjs";

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
const click$ = fromEvent<KeyboardEvent>(document, 'click')

// La function Merge recibe Observables como argumentos y sencillamente va emitiendo los valores
// a medida que los observables que maneja van emitiendo
const events$ = merge(keyup$, click$);

events$.subscribe(console.log)
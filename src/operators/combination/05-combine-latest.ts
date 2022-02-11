import { combineLatest, fromEvent, pluck } from "rxjs";

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com'
input2.placeholder = '***************'

document.querySelector('body').append(input1, input2);


// Helper
const getInputStream = (element: HTMLElement) => {
    return fromEvent<KeyboardEvent>(element, 'keyup').pipe(pluck<KeyboardEvent>('target', 'value'))
}

// La funcion CombineLatest recibe como argumento un array de Observables
// y lo que retorna será un array con los ultimos valores emitidos por cada uno
// de los Observables que recibe cada vez que alguno de ellos emite un valor. Es decir,
// si el primer Observable emite 1 y el segundo emite X y luego el primero emite 2, esta
// funcion retornara primero [1, 'X'] y luego [2, 'X']
combineLatest([
    getInputStream(input1),
    getInputStream(input2)
]).subscribe(console.log);
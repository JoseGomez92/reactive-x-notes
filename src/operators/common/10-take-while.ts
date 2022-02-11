import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map<MouseEvent, number>(({ y }) => y),
    /**
     * El operador takeWhile expulsa los valores que recibe desde el Observable
     * hasta que se da la condicion que se evalua en el predicado que recibe, para 
     * dado esto, completar el Observable.
     * 
     * Si se le pasa la bandera true, el valor que hace que se complete el Observable
     * (el que cumple la condicion del predicado) tambien es emitido.
     */
    takeWhile(y => y <= 350, true)
).subscribe({
    next: (value) => console.log('Clicked on position Y: ', value),
    complete: () => console.log('Complete.')
});
import { fromEvent, interval, takeUntil } from "rxjs";

// Se añade un boton al body del HTML
const button = document.createElement('button');
button.innerHTML = 'Stop Timer';
document.querySelector('body').append(button);


const clickButton$ = fromEvent<MouseEvent>(button, 'click');

interval(1000).pipe(
    /**
     * El operador TakeUntil expulsa los valores que recibe hasta que el Observable
     * que se le pasa como argumento emite algun valor, lo que hace que deje de expulsar
     * valores y se llame al complete del Observable.
     */
    takeUntil(clickButton$)
).subscribe({
    next: value => console.log('Next: ', value),
    complete: () => console.log('Complete')
})

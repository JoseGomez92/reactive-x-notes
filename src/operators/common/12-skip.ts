import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

// Se añade un boton al body del HTML
const button = document.createElement('button');
button.innerHTML = 'Stop Timer';
document.querySelector('body').append(button);


const clickButton$ = fromEvent<MouseEvent>(button, 'click').pipe(
    tap(() => console.log('Tap before skip')),
    /**
     * Mediante el operador Skip, podemos saltar la emision de la cantidad de valores
     * que se le pasen como argumento para despues de esto, completar el Observable.
     * 
     * En este caso, la primera vez que se haga click sobre el boton no se enviará nada 
     * puesto que hay un skip de 1, por lo que hasta que no se haga un segundo click, no se
     * completará el interval (ya que esta sujeto al operador takeUntil).
     */
    skip(1),
    tap(() => console.log('Tap after skip')),
);

interval(500).pipe(
    takeUntil(clickButton$)
).subscribe({
    next: value => console.log('Next: ', value),
    complete: () => console.log('Complete')
})

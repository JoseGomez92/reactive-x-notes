import { first, fromEvent, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    tap<PointerEvent>(() => console.log('Click!!')),
    /**
     * El operador first toma solo el primer valor emitido por el observable
     * para que despues de esto "mate" a dicho Observable llamando al metodo
     * complete.
     */
    first<PointerEvent>()
).subscribe({
    next: value => console.log('Event: ', value),
    complete: () => console.log('Complete')
});



const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyUp$.pipe(
    tap<KeyboardEvent>((value) => console.log('Key pressed!!')),
    /**
     * Otra utilidad importante del first es que permite filtrar el primer valor
     * que será tomado en base a una condicion, de tal forma que ya no se devolvera
     * el primer valor emitido por el Observable, si no que se tomará el primero
     * que se ajuste a la condicion impuesta (para de la misma forma completar el Observable).
     * 
     * En este caso solo se emitira al Subscriber el primer evento correspondiente a la pulsacion
     * de la tecla "a".
     */
    first<KeyboardEvent>(({ key }) => key === 'a')
).subscribe({
    next: value => console.log('Event: ', value),
    complete: () => console.log('Complete')
});
import { fromEvent } from 'rxjs';

/**
 * Mediante la function fromEvent podemos crear Observables en base a eventos del DOM
 * de manera muy sencilla.
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

src1$.subscribe(ev => console.log('Click: ', ev.detail));
src2$.subscribe(ev => console.log('Key: ', ev.key));
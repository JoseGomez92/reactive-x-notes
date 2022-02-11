import { interval, map, Subject, take } from "rxjs";

const randomValues$ = interval(1000).pipe(
    take(5),
    map(value => Math.round(Math.random() * 100))
);

// Se wrappea el observable en un Subject para que así se pueda
// realizar multicast (emitir los mismos valores a todos los subscribers)
const subjectRandomValues$ = new Subject<number>();
randomValues$.subscribe(subjectRandomValues$);


subjectRandomValues$.subscribe((value) => console.log('Subscriber 1: ', value))
subjectRandomValues$.subscribe((value) => console.log('Subscriber 2: ', value))

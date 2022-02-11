import { Observable, Observer } from "rxjs";

const observable$ = new Observable<number>(subs => {
    let counter = 1;

    // Es muy importante tener en cuenta, que una vez que el observable se ha completado se ejecuta
    // la funcion de return de la misma forma que si se hubiesen realizado las desuscripciones, por lo que
    // mediante el return del observable podemos "autolimpiar" este independientemente de que haya habido desuscripciones o no
    // una vez que se haya completado de la misma forma que se haria al ejecutarse una desuscripcion.
    const counterInterval = setInterval(() => {
        if (counter > 3) subs.complete();
        subs.next(counter);
        counter++;
    }, 100);

    return () => {
        clearInterval(counterInterval);
        console.log('Interval has been cleared');
    }
});

const createObserver = (observerNumber: number): Observer<number> => {
   return {
    next: value => console.log(`Observer ${observerNumber}: ${value}`),
    error: (err) => console.error(`Error: ${err}`),
    complete: () => console.info(`Observer ${observerNumber} complete`)
   }
};

const subscriber_1 = observable$.subscribe(createObserver(1))
const subscriber_2 = observable$.subscribe(createObserver(2));
const subscriber_3 = observable$.subscribe(createObserver(3));

// Mediante add, podemos encadenar una suscripcion de forma versatil y sencilla, por lo que a la hora de la desuscripcion,
// solo lo haremos mediante la que tiene las desuscripciones anidadas.
// subscriber_1.
//     add(subscriber_2);
// subscriber_1
//     .add(subscriber_3);

setTimeout(() => {
    // Si el observable termina antes de las desuscripciones, el invocar a la desuscripcion literalmente no hará nada.
    subscriber_1.unsubscribe();
}, 2500);


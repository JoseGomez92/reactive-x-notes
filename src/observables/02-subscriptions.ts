import { Observable } from "rxjs";

const observable$ = new Observable<number>(subs => {
    let counter = 1;

    const counterInterval = setInterval(() => {
        subs.next(counter);
        console.log('Observer Num: ', counter);
        counter++;
    }, 500);

    //En el return se devuelve la funcion que será ejecutada cuando se ejecute el subscribe para un subscriptor
    return () => {
        clearInterval(counterInterval);
        console.log('Interval has been cleared');
    }
});

// Por cada subscriber se ejecutara el codigo del observable, es decir, para cada subscribe se ejecutara un intervalo
// el cual a su vez emitira a todos los observables mediante el next() por lo que es importante tener el return para
// que el propio observable se "limpie" cuando se desuscriban sus suscriptores
const subscriber_1 = observable$.subscribe((value: number) => console.log('Subscriptor 1 Num: ', value));
const subscriber_2 = observable$.subscribe((value: number) => console.log('Subscriptor 2 Num: ', value));
const subscriber_3 = observable$.subscribe((value: number) => console.log('Subscriptor 3 Num: ', value));

setTimeout(() => {
    subscriber_1.unsubscribe();
    // subscriber_2.unsubscribe();
    // subscriber_3.unsubscribe();
}, 2500);


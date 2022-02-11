import { Observable, Observer, Subject } from 'rxjs';

const observable$ = new Observable<number>(subs => {
    const intervalRef = setInterval(() => {
       subs.next(Math.random())
    }, 500);

    return () => {
        clearInterval(intervalRef);
        console.log('Interval has been destroyed');
    }
});

const createObserver = (observerNumber: number): Observer<number> => {
    return {
     next: value => console.log(`Observer ${observerNumber}: ${value}`),
     error: (err) => console.error(`Error: ${err}`),
     complete: () => console.info(`Observer ${observerNumber} complete`)
    }
 };

/**
 * Los subjects tienen multiples peculiaridades. Estas son:
 * 
 * 1.- Permiten el multicast. Al contrario que con los observables, 
 * un subject siempre emite el mismo valor a todos sus suscribers.
 * 
 * 2.- Un subject es a su misma vez un observable y un observer.
 * 
 * 3.- Tambien permiten ser gestionados mediante next, error y complete.
 */
const subject$: Subject<number> = new Subject<number>();


const subject_subscriber = observable$.subscribe(subject$);


const subscriber_1 = subject$.subscribe(createObserver(1))
const subscriber_2 = subject$.subscribe(createObserver(2));

setTimeout(() => {
    /**
     * Puesto que los subjects son observables, pueden forzarse el envio de valores 
     * desde fuera llamando a su metodo next() (Hot Observable)
     */
    subject$.next(100);

    /**
     * De la misma forma al ser observables puede invocarse al metodo complete de estos.
     */
    subject$.complete();
    
    /**
     * Puesto que es tambien un observer, podemos desuscribirnos del Observer.
     */
     subject_subscriber.unsubscribe();
     
} , 3000);

/**
 * La diferencia entre Hot y Cold Observable es:
 * 
 * - Los Cold Observables solo emiente valores por si mismos.
 * 
 * - Los Hot Observables pueden emitir tanto valores por si mismos como ser forzados a 
 *   emitir valores desde "fuera" como en el caso de la invocación al metodo next() en
 *   el setTimeout.
 * 
 * Por tanto, un Subject permite tranformar un Cold Observable en un Hot Observable.
 */
import { Observable, Observer } from 'rxjs';

const observable$ = new Observable<string>(subs => {
    let counter = 1;
    setInterval(() => {
        counter !== 8 ? subs.next(`Yeepppp ${counter++}`) : subs.error('Oopsss an error!')  
        if (counter > 10) subs.complete();
    }, 500);
});

const observer_1: Observer<string> = {
    next: value => console.log(`Observer 1: ${value}`),
    error: (err) => console.error(`Error: ${err}`),
    complete: () => console.info('Observer complete')
};

const observer_2: Observer<string> = {
    next: value => console.log(`Observer 2: ${value}`),
    error: err => console.error(`Error: ${err}`),
    complete: () => console.info('Observer complete')
};

const subscriber_1 = observable$.subscribe(observer_1);
const subscriber_2 = observable$.subscribe(observer_2);


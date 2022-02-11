import { interval, map, take } from "rxjs";

const initialValue = 7;
const countDown$ = interval(100).pipe(
    map((value) => initialValue - value),
    take(initialValue + 1)
);


countDown$.subscribe(console.log);
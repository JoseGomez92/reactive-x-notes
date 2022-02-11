import { combineLatest, interval, map, take, timer } from "rxjs";

const letters = ['a', 'b', 'c', 'd', 'e'];
const numbers = [1, 2, 3, 4, 5];

const letters$ = interval(100).pipe(
    map(value => letters[value]),
    take(letters.length)
);
const numbers$ = timer(50, 100).pipe(
    map(value => numbers[value]),
    take(numbers.length)
)

combineLatest([letters$, numbers$]).pipe(
    map(([v1, v2]) => v1 + v2)
).subscribe(console.log)
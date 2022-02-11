import { filter, from, reduce } from "rxjs";

const data = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

from(data).pipe(
   filter<any>((value) => typeof value === 'number'),
   reduce((prev, current) => prev + current , 0)
).subscribe((total) => console.log('The total is: ', total))
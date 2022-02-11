import { from, map } from "rxjs";

const names$ = from(["batman", "superman", "joker", "ironman"]);

const capitalize = (value: string) =>
  value
    .split(" ")
    .map((v) => v[0].toUpperCase() + v.substring(1, v.length))
    .reduce((prev, current) => (prev ? current : `${prev} ${current}`), "");

names$.pipe(map(capitalize)).subscribe(console.log);

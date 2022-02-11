import { catchError, delay, forkJoin, interval, of, take } from "rxjs";
import { ajax } from "rxjs/ajax";

const numbers$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letters$ = of("a", "b", "c", "d").pipe(delay(3500));

// La funcion ForkJoin recibe un conjunto de Observables y emite la union
// de los ultimos valores que emiten estos, siempre y cuando estos se hayan completado,
// es decir, hasta que todos los Observables que maneja no se hayan completado no se emitirá
// ningun valor.
forkJoin([numbers$, interval$, letters$]).subscribe((data) =>
  console.log("Example 1: ", data)
);


const GITHUB_API_URL = "https://api.github.com/users";
const GITHUB_USER = "JoseGomez92";

// Es por el aspecto de que hasta que no se hayan completado todos los Observables
// que ForkJoin es muy util para manejar peticiones HTTP de forma simultanea.
forkJoin({
  user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repositories: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
})
  .pipe(catchError((err) => err.message))
  .subscribe((data) => console.log("Example 2:", data));

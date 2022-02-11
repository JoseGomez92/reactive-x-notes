import { catchError, of, pluck } from 'rxjs';
import { ajax } from 'rxjs/ajax'

const url = 'https://api.github.com/users?per_page=5';

ajax(url).pipe(
    pluck('response'),
    // El auxiliar catchError captura las excepciones que pueda emitir el observable
    // para asi tratar estar de la forma mas conveniente.
    catchError(err => {
       console.log('Error al obtener los users - ', err)
       return of([]);
    })
).subscribe(console.log);
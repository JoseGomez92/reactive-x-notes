import { distinctUntilChanged, from, of } from "rxjs";


of(1,1,2,3,4,5,4,7,2).pipe(
    /**
     * DistinctUntilChanged es un operador que elimina los valores duplicados seguidos,
     * esto es, no expulsa el valor actual si este es igual al inmediatamente anterior.
     */
    distinctUntilChanged()
).subscribe(console.log)


const heroes = [
    {
        name: 'Megaman'
    },
    {
        name: 'Superman'
    },
    {
        name: 'Batman'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'Ironam'
    },
    {
        name: 'Batman'
    },
]

from(heroes).pipe(
    /**
     * En el caso de objectos DistinctUntilChanged recibe un predicado al cual se le
     * pasan los valores anterior y actual para que de esta forma si son iguales no se
     * expulse el actual.
     */
    distinctUntilChanged((prev, current) => prev.name === current.name)
).subscribe(console.log)
import { distinctUntilKeyChanged, from } from "rxjs"

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
     * El operador DistinctUntilKeyChanged se comporta exactamente igual al operador
     * DistinctUntilChanged con la diferencia de que este está orientado a objetos, por lo
     * que lo unico que necesita es la key de la propiedad por la que se quiere diferenciar.
     */
    distinctUntilKeyChanged('name')
).subscribe(console.log)
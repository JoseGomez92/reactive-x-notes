import { distinct, from, of } from "rxjs";


of(1,1,2,3,4,5,4,7,2).pipe(
    /**
     * Mediante el operador Distinct lo que conseguimos es que no se vuelvan a expulsar
     * los valores que ya han sido emitidos previamente por el Observable, es decir, solo
     * se enviaran a los Subscribers los valores una unica vez independientemente de cuantas
     * veces lo emita el Observable (logicamente siempre que sea al menos 1).
     */
    distinct()
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
        name: 'Catwoman'
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
     * Puesto que el operador Distinct realiza las comparaciones internamente mediante ===
     * cuando se usa con un Observable que emite objetos debemos indicarle un predicado para
     * que pueda distinguir los objetos con valores iguales (ya que serian objetos identicos
     * pero no el mismo).
     */
    distinct((hero) => hero.name)
).subscribe(console.log)
import { filter, from, range } from "rxjs";

const range$ = range(10, 50)

const evenNumber$ = range$.pipe(
    /**
     * Mediante el operador filter podemos filtrar los valores emitidos por el observable
     * para retornar solo los que se ajusten a una determinada condicion (la condicion logicamente
     * deberá retornar un booleano).
     * 
     * En este caso se filtra para devolver solo los numeros pares.
     */
    filter<number>((value) => value % 2 === 0)
)

evenNumber$.subscribe(console.log)



const character: Array<{ type: string, name: string }> = [
    {
        type: 'hero',
        name: 'Batman'
    },
    {
        type: 'hero',
        name: 'Robin'
    },
    {
        type: 'villain',
        name: 'Joker'
    }
]

const from$ = from(character);

const heroes$ = from$.pipe(
    /**
     * En este caso se filtra solo para devolver los personajes de tipo 'hero'.
     */
    filter<{ type: string, name: string }>(c => c.type === 'hero')
);

heroes$.subscribe(console.log);
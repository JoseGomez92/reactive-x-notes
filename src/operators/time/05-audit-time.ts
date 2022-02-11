import { auditTime, fromEvent } from "rxjs";

const output = document.createElement('output')
document.querySelector('body').append(output)


const click$ = fromEvent<MouseEvent>(document, 'click')


click$.pipe(
    /**
     * El operador auditTime sirve para acumular los valores emitidos por el observable
     * durante el periodo de tiempo especificado para luego pasar a los subscribers el ultimo
     * de dichos valores.
     * 
     * Una vez que ha pasado el lapso de tiempo el intervalo comienza de nuevo siempre y cuando
     * el observable emita algun valor, esto es, hasta que el observable no emita ningun valor el
     * intervalo no comienza "de nuevo". 
     * 
     * Destacar que una vez que el observable se completa el ultimo valor no es emitido.
     */
    auditTime(2500)
).subscribe(({ clientX, clientY }) => {
    output.value = `Click on X<${clientX}> -- Y<${clientY}>`
})
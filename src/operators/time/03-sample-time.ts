import { fromEvent, map, sampleTime } from "rxjs";

const output = document.createElement('output')
document.querySelector('body').append(output)


const click$ = fromEvent<MouseEvent>(document, 'click')


click$.pipe(
    /**
     * El operador sampleTime sirve para acumular los valores emitidos por el observable
     * durante el periodo de tiempo especificado, para que una vez haya transcurrido dicho
     * intervalo, emita el ultimo valor que recibio desde el observable en dicho periodo de
     * tiempo.
     * 
     * Una vez transcurre dicho intervalo el intervalo se 'resetea' y vuelve a empezar el
     * ciclo de acumulación de este.
     */
    sampleTime(3000),
    map(({ x, y }) => ({ x, y }))
).subscribe((coords) => {
    output.value = `Click on X: ${coords.x} and Y: ${coords.y}`
})
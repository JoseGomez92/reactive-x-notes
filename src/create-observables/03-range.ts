import { asyncScheduler, range } from 'rxjs'

/**
 * Crea un observable en base a una secuencia de numeros.
 * 
 * Por defecto es sincrono pero puede crearse para que sea asincrono mediante un AsyncScheduler.
 */
const range$ = range(1, 10) // Range sincrono

const asyncRange$ = range(-10, 10, asyncScheduler) // Range asincrono

console.log('Antes del Range Sincrono')
range$.subscribe(value => console.log('Value: ', value))
console.log('Despues del Range Sincrono')

console.log('Antes del Range Asincrono')
asyncRange$.subscribe(value => console.log('Value: ', value))
console.log('Despues del Range Asincrono')

import { asyncScheduler } from 'rxjs';

/**
 * AsyncSchduler permite ejecutar tareas programadas en un fecha especifica o durante 
 * un intervalo de tiempo de forma asincrona. En otras palabras, asyncScheduler es un
 * "sustituto" de setInterval y setTimeout.
 * 
 * Cabe destacar que lo que se obtiene de un schedule no es un Observable si no una 
 * subscripcion ya que logicamente ya se esta invocando a la tarea programada.
 */
const subscriberTimeoutScheduled = asyncScheduler.schedule(console.log, 1000, 'Timeout Scheduled Executed!!!'); //Equivale a un setTimeout

setTimeout(() => subscriberTimeoutScheduled.unsubscribe(), 5000)

const subscriberIntervalScheduled = asyncScheduler.schedule(function(state) {
    console.log('Interval state: ', state)
    /**
     * El primer parametro es el estado que recibira la funcion y el segundo
     * el delay con el que se volvera a llamar a la tarea programada.
     */
    this.schedule(state + 1, 1000)
}, 500, 0)

//Es el equivalente al setTimeout para desuscribirse de la timeout scheduled
asyncScheduler.schedule(() => subscriberIntervalScheduled.unsubscribe(), 5000)
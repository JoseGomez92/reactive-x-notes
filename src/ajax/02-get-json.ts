import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

// El metodo getJSON de ajax nos permite obtener directamente el body de la respuesta
// y parsear dicha response a un objecto JSON. El objeto que se manda como argumento
// a continuacion de la url son los headers que se enviaran en la peticion.
const obs$ = ajax.getJSON(url, {
  "Content-Type": "application/json",
  "Custom-Token": "ABCD1234!%",
});

obs$.subscribe((data) => console.log(data));

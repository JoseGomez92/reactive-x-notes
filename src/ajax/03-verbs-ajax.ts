import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

// Mediante los metodos post, put, delete, etc. podremos hacer peticiones
// HTTP mediante el verbo que indica el propio nombre del metodo.
ajax.post(url, {
    id: 1,
    name: 'User_Name'
}, {
    'Custom-Token': 'ABCD1234!%'
}).subscribe((resp) => console.log('Request 1: ', resp));

// Tambien podremos indicar la "configuracion" para la peticion pasandole
// como argumento esta ajax.
ajax({
    url,
    method: 'PUT',
    headers: {
        'Amazing-Token': 'OOOOHHHHH_ITSSS_AMAZZIINNGGG!!'
    },
    body: {
        id: 2,
        name: 'User_Name_2'
    }
}).subscribe((resp) => console.log('Request 2:', resp));
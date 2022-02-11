import { map, of, switchMap, zip } from "rxjs";
import { ajax } from "rxjs/ajax";

const API_URL = 'https://swapi.dev/api';

// Helper
const getRequest = (url: string) => ajax.getJSON<any>(url);

getRequest(`${API_URL}/people/1`).pipe(
    switchMap(response => zip(of(response), getRequest(response.homeworld))),
    map(([character, world]) => ({ character, world }))
).subscribe(console.log)
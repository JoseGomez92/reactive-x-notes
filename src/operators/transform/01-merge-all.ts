import { debounceTime, fromEvent, map, mergeAll, Observable, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser, GithubUsers } from "./interfaces";

// DOM Elements
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);


// Observables
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");


// Helpers
const appendUsers = (users: GithubUser[]) => {
  orderList.innerHTML = '';
  for (const user of users) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const anchor = document.createElement("a");
    img.src = user.avatar_url;
    anchor.href = user.html_url;
    anchor.text = user.html_url;
    anchor.target = "_blank";
    li.append(img);
    li.append(user.login + " ");
    li.append(anchor);
    orderList.append(li);
  }
};


input$
  .pipe(
    debounceTime(500),
    pluck("target", "value"),
    map((text) => {
      return ajax.getJSON(`https://api.github.com/search/users?q=${text}`);
    }),
    // El operador para flattening MergeAll es un operador que maneja subscripciones
    // a Observables. De tal forma que lo que hará sera retornar un observable que devolverá
    // todos los valores que vayan emitiendo los observables que maneja. Es decir, lo que hace
    // MergeAll es combinar las salidas de varios observables en uno solo.
    mergeAll<Observable<GithubUsers>>(),
  )
  .subscribe((response: GithubUsers) => { appendUsers(response.items) });

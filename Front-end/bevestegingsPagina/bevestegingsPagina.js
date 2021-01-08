const dag = document.querySelector("#dag");
const datum = document.querySelector("#datum");
const tijd = document.querySelector("#tijd");
const behandeling = document.querySelector("#behandeling");

const filter = localStorage.getItem("behandelingen").split("\"");

dag.innerHTML = localStorage.getItem("dag");
datum.innerHTML = localStorage.getItem("datum");
tijd.innerHTML = localStorage.getItem("tijd");
behandeling.innerHTML = filter[1];

console.log(localStorage);
console.log(filter);
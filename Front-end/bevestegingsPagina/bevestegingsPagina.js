const dag = document.querySelector("#dag");
const datum = document.querySelector("#datum");
const tijd = document.querySelector("#tijd");
const behandeling = document.querySelector("#behandeling");
const homeButton = document.querySelector("#homeButton");
const naam = document.querySelector("#naam");
const email = document.querySelector("#email");
naam.innerHTML = localStorage.getItem("fname");
email.innerHTML = localStorage.getItem("email");
dag.innerHTML = localStorage.getItem("dag");
datum.innerHTML = localStorage.getItem("datum");
tijd.innerHTML = localStorage.getItem("tijd");
behandeling.innerHTML = localStorage.getItem("behandelingen");
wijzigKnop = document.querySelector("#wijzigButton")
wijzigKnop.addEventListener ("click", () =>{
  window.location.assign("../contactgegevens/contactgegevens.html")
})

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"age":""+localStorage.getItem("age")+"",
                          "behandelingen":""+localStorage.getItem("behandelingen")+"",
                          "dag":""+localStorage.getItem("dag")+"",
                          "datum":""+localStorage.getItem("datum")+"",
                          "email":""+localStorage.getItem("email")+"",
                          "fname":""+localStorage.getItem("fname")+"",
                          "gender":""+localStorage.getItem("gender")+"",
                          "tijd":""+localStorage.getItem("tijd")+""});
console.log(raw);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

homeButton.addEventListener("click", () => {
  fetch("http://127.0.0.1:8000/api/reservering/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
});


console.log(localStorage);

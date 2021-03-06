const popup = document.getElementById("popup");
const dag = document.querySelector("#dag");
const datum = document.querySelector("#datum");
const tijd = document.querySelector("#tijd");
const behandeling = document.querySelector("#behandeling");
const bevestigingsButton = document.querySelector("#bevestigingsButton");
const naam = document.querySelector("#naam");
const email = document.querySelector("#email");
const controlescherm = document.querySelector("controlescherm");
const overlay = document.querySelector("#overlay")
popup.style.display = "none";
naam.innerHTML = localStorage.getItem("fname");
email.innerHTML = localStorage.getItem("email");
dag.innerHTML = localStorage.getItem("dag");
datum.innerHTML = localStorage.getItem("datum");
tijd.innerHTML = localStorage.getItem("tijd");
behandeling.innerHTML = localStorage.getItem("behandelingen");
wijzigKnop = document.querySelector("#wijzigButton")
wijzigKnop.addEventListener ("click", () =>{
  window.location.assign("../contactgegevens/contactgegevens.html");
})

function displayPopup() {
  overlay.style.display = "block";
  popup.style.display = "block";
};

//executed when fetch reloads page
if (localStorage.getItem("popupCheck") == "true") {
  localStorage.clear();
  displayPopup();
}

//fetch part
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"age":""+localStorage.getItem("age")+"",
                          "behandelingen":""+localStorage.getItem("behandelingen")+"",
                          "dag":""+localStorage.getItem("dag")+"",
                          "datum":""+localStorage.getItem("datum")+"",
                          "email":""+localStorage.getItem("email")+"",
                          "fname":""+localStorage.getItem("fname")+"",
                          "gender":""+localStorage.getItem("gender")+"",
                          "tijd":""+localStorage.getItem("tijd")+"",
                          "tijdsvak":""+localStorage.getItem("tijdsvak")+""})+"";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

bevestigingsButton.addEventListener("click", () => {
  fetch("http://127.0.0.1:8000/api/reservering/", requestOptions)
  .then(response => response.text())
  .then(response => localStorage.setItem("popupCheck", "true"))
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
  .catch(error => alert("Er is iets misgegaan"));
  });

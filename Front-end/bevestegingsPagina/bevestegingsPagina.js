const dag = document.querySelector("#dag");
const datum = document.querySelector("#datum");
const tijd = document.querySelector("#tijd");
const behandeling = document.querySelector("#behandeling");

// const filter = localStorage.getItem("behandelingen").split("\"");

dag.innerHTML = localStorage.getItem("dag");
datum.innerHTML = localStorage.getItem("datum");
tijd.innerHTML = localStorage.getItem("tijd");
behandeling.innerHTML = localStorage.getItem("behandelingen");

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({"age":"volwassene","behandelingen":"knippen_lang, wassen, baard","dag":"Zaterdag","datum":"9 januari","email":"puckbakker@gmail.com","fname":"Puck bakker","gender":"Vrouw","tijd":"13:00 - 15:00"});

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://127.0.0.1:8000/api/reservering/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


console.log(localStorage);

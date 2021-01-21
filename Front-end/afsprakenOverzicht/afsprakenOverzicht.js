var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const properties = {
  0 : "fname",
  1 : "gender",
  2: "age",
  3 : "behandelingen",
  4 : "dag",
  5 : "datum",
  6 : "tijd",
  7 : "email",
  8 : "tijdsvak"
}

let fetchOutput = [];

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/api/reservering/", requestOptions)
  .then(response => response.json())
  .then(data => fetchOutput = data)
  .catch(error => console.log('error', error));


setTimeout(() => {
  fillCells();
}, 500);

//generate tablecells 
function fillCells() {
  for (j = 0; j <= fetchOutput.length-1; j++) {
    table.insertRow().id = "row"+j+"";
    for (k = 0; k <= 7; k++) {
      document.querySelector("#row"+j+"").insertCell().id = "r"+j+"c"+k+"";
      document.querySelector("#"+"r"+j+"c"+k+"").innerHTML = "\u00a0"+fetchOutput[j][properties[k]]+"";
    }
  }
}
//Creating list
const table = document.querySelector("#table");

// Logout JS
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

// authentication
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
    } else {
        console.log('user logged out');
        window.location.assign("../Login Kapper/login.html");
    }
});



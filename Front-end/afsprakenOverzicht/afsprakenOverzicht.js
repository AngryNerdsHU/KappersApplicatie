var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"age":"kind","behandelingen":"knippen_kort, wassen","dag":"Vrijdag","datum":"8 januari","email":"lalala@gmail.com","fname":"Joas Boevink","gender":"man","tijd":"10:00 - 11:00"});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// fetch("http://127.0.0.1:8000/api/reservering/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

//Creating list
const table = document.querySelector("#table");
const fetchOutput = [{"id": 1, "age": "volwassene", "behandelingen": "knippen_lang, wassen, baard", "dag": "Zaterdag", "datum": "9 januari", "email": "joas@gmail.com", "fname": "Puck bakker", "gender": "Vrouw", "tijd": "13:00 - 15:00"}, {"id": 2, "age": "volwassene", "behandelingen": "knippen_lang, wassen, baard", "dag": "Zaterdag", "datum": "9 januari", "email": "puckbakker@gmail.com", "fname": "Puck bakker", "gender": "Vrouw", "tijd": "13:00 - 15:00"}, {"id": 4, "age": "kind", "behandelingen": "knippen_baard, wassen", "dag": "Zondag", "datum": "10 Januari", "email": "yhabers@gmail.com", "fname": "Yi Habers", "gender": "man", "tijd": "13:00 - 14:00"}]

const properties = {
  0 : "fname",
  1 : "gender",
  2: "age",
  3 : "behandelingen",
  4 : "dag",
  5 : "datum",
  6 : "tijd",
  7 : "email"
}

// console.log(fetchOutput);
for (j = 0; j <= fetchOutput.length-1; j++) {
  table.insertRow().id = "row"+j+"";
  for (k = 0; k <= 7; k++) {
    document.querySelector("#row"+j+"").insertCell().id = "r"+j+"c"+k+"";
    document.querySelector("#"+"r"+j+"c"+k+"").innerHTML = "\u00a0"+fetchOutput[j][properties[k]]+"";
  }
}

// Logout JS
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
    } else {
        console.log('user logged out');
        window.location.assign("../Login Kapper/login.html");
    }
});



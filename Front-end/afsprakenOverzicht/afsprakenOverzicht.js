var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"age":"kind","behandelingen":"knippen_kort, wassen","dag":"Vrijdag","datum":"8 januari","email":"lalala@gmail.com","fname":"Joas Boevink","gender":"man","tijd":"10:00 - 11:00"});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/api/reservering/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


const fetchOutput = [{"id": 1, "age": "volwassene", "behandelingen": "knippen_lang, wassen, baard", "dag": "Zaterdag", "datum": "9 januari", "email": "joas@gmail.com", "fname": "Puck bakker", "gender": "Vrouw", "tijd": "13:00 - 15:00"}, {"id": 2, "age": "volwassene", "behandelingen": "knippen_lang, wassen, baard", "dag": "Zaterdag", "datum": "9 januari", "email": "puckbakker@gmail.com", "fname": "Puck bakker", "gender": "Vrouw", "tijd": "13:00 - 15:00"}, {"id": 4, "age": "kind", "behandelingen": "knippen_baard, wassen", "dag": "Zondag", "datum": "10 Januari", "email": "yhabers@gmail.com", "fname": "Yi Habers", "gender": "man", "tijd": "13:00 - 14:00"}]
const date = new Date();

const calenderHours = document.querySelector(".calenderHours");

const maanden = [
  "Januari",
  "Februari",
  "Maart",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "December"
];

const dagen = [
  "Zo",
  "Ma",
  "Di",
  "Wo",
  "Do",
  "Vrij",
  "Za"
];

// weeknummerfunctie
function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  return weekNo;
}

var weeknummer = getWeekNumber(new Date());

document.querySelector(".next").addEventListener("click", () => {
  weeknummer++;
  console.log("click");
  console.log(weeknummer)
  if (weeknummer > 52) {
    weeknummer = 1;
  }
  document.querySelector(".date h1").innerHTML = "Week " + weeknummer;
});
document.querySelector(".prev").addEventListener("click", () => {
  weeknummer--;
  console.log("click");
  console.log(weeknummer)
  if (weeknummer < 1) {
    weeknummer = 52;
  }
  document.querySelector(".date h1").innerHTML = "Week " + weeknummer;
});

document.querySelector(".date h1").innerHTML = "Week " + weeknummer;

document.querySelector(".date p").innerHTML = dagen[date.getDay()] + " " + date.getDate() + " " + maanden[date.getMonth()] + " " + date.getFullYear();

// Uren
let hour = "";

for (let j = 1; j <= 63; j++) {
  if(j<8) {
    hour += '<div>9:00-10:00</div>';
  }
  else if(j<15) {
    hour += '<div>10:00-11:00</div>';
  }
  else if(j<22) {
    hour += '<div>11:00-12:00</div>';
  }
  else if(j<29) {
    hour += '<div>12:00-13:00</div>';
  }
  else if(j<36) {
    hour += '<div>13:00-14:00</div>';
  }
  else if(j<43) {
    hour += '<div>14:00-15:00</div>';
  }
  else if(j<50) {
    hour += '<div>15:00-16:00</div>';
  }
  else if(j<57) {
    hour += '<div>16:00-17:00</div>';
  }
  else if(j<64) {
    hour += '<div>17:00-18:00</div>';
  }
  else hour += '<div>hoi</div>';
  calenderHours.innerHTML = hour;
}

function doStuff() {
  console.log(weeknummer);
}
setInterval(doStuff, 1000);

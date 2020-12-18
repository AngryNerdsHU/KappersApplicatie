const date = new Date();

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
  if (weeknummer > 53) {
    weeknummer = 1;
  }
  document.querySelector(".date h1").innerHTML = "Week " + weeknummer;
});
document.querySelector(".prev").addEventListener("click", () => {
  weeknummer--;
  if (weeknummer < 1) {
    weeknummer = 53;
  }
  document.querySelector(".date h1").innerHTML = "Week " + weeknummer;
});

document.querySelector(".date h1").innerHTML = "Week " + weeknummer;

// Weekdagen
const firstDay = document.querySelector("#firstDay"), 
      lastDay = document.querySelector("#lastDay"),
      nextArrow = document.querySelector("#next"),
      prevArrow = document.querySelector("#prev");

let firstDate = getMonday(date),
    lastDate = getSunday(date);
    clickAmount = 1;
    nextCheck = true;
    prevCheck = false;

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1);
  return new Date(d.setDate(diff));
}
function getSunday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1) + 6;
  return new Date(d.setDate(diff));
}
function weekMonth(day) {
  if (day == 0) {return firstDate.toLocaleString("default", { month: "short"})}
  if (day == 1) {return lastDate.toLocaleString("default", { month: "short"})}
}

nextArrow.addEventListener("click", function() {
  if (prevCheck == true) {clickAmount = clickAmount + 2};
  const addWeekM = getMonday(date).getDate() + (7 * clickAmount);
  const addWeekS = getSunday(date).getDate() + (7 * clickAmount);
  firstDate.setDate(addWeekM);
  lastDate.setDate(addWeekS);
  clickAmount++;
  firstDay.innerHTML = firstDate.getDate() + " " + weekMonth(0);
  lastDay.innerHTML = lastDate.getDate() + " " + weekMonth(1);
  firstDate = new Date();
  lastDate = new Date();
  nextCheck = true;
  prevCheck = false;
});
prevArrow.addEventListener("click", function() {
  if (nextCheck == true) {clickAmount = clickAmount - 2}
  const addWeekM = getMonday(date).getDate() + (7 * clickAmount);
  const addWeekS = getSunday(date).getDate() + (7 * clickAmount);
  firstDate.setDate(addWeekM);
  lastDate.setDate(addWeekS);
  clickAmount--;
  firstDay.innerHTML = firstDate.getDate() + " " + weekMonth(0);
  lastDay.innerHTML = lastDate.getDate() + " " + weekMonth(1);
  firstDate = new Date();
  lastDate = new Date();
  prevCheck = true;
  nextCheck = false;
});

firstDay.innerHTML = firstDate.getDate() + " " + weekMonth(0);
lastDay.innerHTML = lastDate.getDate() + " " + weekMonth(1);

// Uren

const calenderHours = document.querySelector(".calenderHours");

let hour = "";

for (let j = 1; j <= 63; j++) {
  if(j<8) {
    hour += "<div id="+"9-10,"+j+">9:00-10:00</div>";
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
  calenderHours.innerHTML = hour;
}

// setInterval(() => {
//   console.log(localStorage)
// }, 3000)


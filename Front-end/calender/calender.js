// Arrays
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
  "Ma",
  "Di",
  "Wo",
  "Do",
  "Vr",
  "Za",
  "Zo"
];

// Variables
const date = new Date(),
      calenderHours = document.querySelector("#calenderHours"),
      firstDay = document.querySelector("#firstDay"), 
      lastDay = document.querySelector("#lastDay"),
      nextArrow = document.querySelector("#next"),
      prevArrow = document.querySelector("#prev");
      leftArrow = document.querySelector("#leftArrow");
      rightArrow = document.querySelector("#rightArrow");
      Ma = "Maandag";
      Di = "Dinsdag";
      Wo = "Woensdag";
      Do = "Donderdag";
      Vr = "Vrijdag";
      Za = "Zaterdag"
      Zo = "Zondag";

let firstDate = getMonday(date),
    lastDate = getSunday(date),
    clickAmount = 1,
    nextCheck = true,
    prevCheck = false,
    hour = "";

// WeeknumberFunction
function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  return weekNo;
}
var weeknummer = getWeekNumber(new Date());

// Weekmenu
nextArrow.addEventListener("click", () => {
  //weeknumber
  weeknummer++;
  if (weeknummer > 53) {weeknummer = 1}
  document.querySelector(".date h1").innerHTML = "Week " + weeknummer;
  createTable();

  //weekdays
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

  //hourStorage
  Today();
});

prevArrow.addEventListener("click", () => {
  //weeknumber
  weeknummer--;
  if (weeknummer < 1) {weeknummer = 53}
  document.querySelector(".date h1").innerHTML = "Week " + weeknummer;
  createTable();

  //weekdays
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

  //hourStorage
  Today();
});
firstDay.innerHTML = firstDate.getDate() + " " + weekMonth(0);
lastDay.innerHTML = lastDate.getDate() + " " + weekMonth(1);
document.querySelector(".date h1").innerHTML = "Week " + weeknummer;

// Functions
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



// Uren
function createTable() {
  hour = " ";
  for (let j = 1; j <= 63; j++) {
    if(j<8) {
      hour += "<div id="+(dagen[j-1])+"-"+weeknummer+"-9"+" onClick='isClicked(this.id)'>9:00-10:00</div>";
    }
    else if(j<15) {
      hour += "<div id="+(dagen[j-7-1])+"-"+weeknummer+"-10"+" onClick='isClicked(this.id)'>10:00-11:00</div>";
    }
    else if(j<22) {
      hour += "<div id="+(dagen[j-7*2-1])+"-"+weeknummer+"-11"+" onClick='isClicked(this.id)'>11:00-12:00</div>";
    }
    else if(j<29) {
      hour += "<div id="+(dagen[j-7*3-1])+"-"+weeknummer+"-12"+" onClick='isClicked(this.id)'>12:00-13:00</div>";
    }
    else if(j<36) {
      hour += "<div id="+(dagen[j-7*4-1])+"-"+weeknummer+"-13"+" onClick='isClicked(this.id)'>13:00-14:00</div>";
    }
    else if(j<43) {
      hour += "<div id="+(dagen[j-7*5-1])+"-"+weeknummer+"-14"+" onClick='isClicked(this.id)'>14:00-15:00</div>";
    }
    else if(j<50) {
      hour += "<div id="+(dagen[j-7*6-1])+"-"+weeknummer+"-15"+" onClick='isClicked(this.id)'>15:00-16:00</div>";
    }
    else if(j<57) {
      hour += "<div id="+(dagen[j-7*7-1])+"-"+weeknummer+"-16"+" onClick='isClicked(this.id)'>16:00-17:00</div>";
    }
    else if(j<64) {
      hour += "<div id="+(dagen[j-7*8-1])+"-"+weeknummer+"-17"+" onClick='isClicked(this.id)'>17:00-18:00</div>";
    }
    calenderHours.innerHTML = hour;
  }
};
createTable();

//Vandaag
function Today() {
  const todayDate = new Date();
  const today = dagen[todayDate.getDay() - (todayDate.getDay() == 0 ? -6 : 1)];
  // console.log(todayDate.getDay(), (todayDate.getDay() - (todayDate.getDay() == 0 ? -6 : 1)));
  const blok = document.querySelectorAll('[id^='+today+']');
  Array.from(blok, e => e.style.backgroundColor = "#50c090");
  // document.querySelector("#Di52-10").style.color = "red";
};
Today();

// Tijdhokje reserveren
// document.addEventListener("click", () => {
//   document.querySelector("#Za1-10").style.backgroundColor = "#407090";
// });
let selectedDay;
let selectedTime;
let FirstDate;
let selectedDate = FirstDate;
let splitArray;

function isClicked(clickedID) {
  getFirstDate();
  selectedID = document.querySelector("#"+clickedID+"");
  selectedID.style.backgroundColor = "#407090";
  splitArray = clickedID.split("-");
  selectedDay = splitArray[0];
  selectedTime = splitArray[2];
  console.log(clickedID, splitArray, selectedDay);
  console.log(selectedDate);
  selectedDate.setDate(selectedDate.getDate() + 1);
}
function getFirstDate() {
  const dateFirst = firstDay.innerHTML;
  const firstDateArray = dateFirst.split(" ");
  const shortMonth = monthShort[firstDateArray[1]];
  FirstDate = new Date(2021, shortMonth, firstDateArray[0]);
}

const fullDaysNames = {
  Ma: "Maandag",
  Di: "Dinsdag",
  Wo: "Woensdag",
  Do: "Donderdag",
  Vr: "Vrijdag",
  Za: "Zaterdag",
  Zo: "Zondag"
};
const monthShort = {
  "jan.": 0,
  "feb.": 1,
  "mrt.": 2,
  "apr.": 3,
  "mei": 4,
  "jun.": 5,
  "jul.": 6,
  "aug.": 7,
  "sep.": 8,
  "okt.": 9,
  "nov.": 10,
  "dec.": 11
};
const dayNumber = {
  "Ma": 0,
  "Di": 1,
  "Wo": 2,
  "Do": 3,
  "Vr": 4,
  "Za": 5,
  "Zo": 6
};



rightArrow.addEventListener("click", () => {
  localStorage.setItem("dag", ""+fullDaysNames[selectedDay]+"");
  localStorage.setItem("datum", ""+date.getDate()+" "+maanden[date.getMonth()]+"");
  localStorage.setItem("tijd", ""+selectedTime+":00 - "+(parseInt(selectedTime)+1)+":00");
  console.log(localStorage);
});

document.querySelector("#Zo-1-9").addEventListener("click", () => {
  localStorage.clear();
  console.log("pizza");
});

setInterval(() => {
  console.log(selectedDate, FirstDate)
}, 3000)


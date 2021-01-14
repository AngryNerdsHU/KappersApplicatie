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
      tijdsvakData = localStorage.getItem("tijdsvak");

let firstDate = getMonday(date),
    lastDate = getSunday(date),
    clickAmount = 1,
    nextCheck = true,
    prevCheck = false,
    hour = "",
    selectedDay;
let selectedTime;
let FirstDate = new Date();
let selectedDate = FirstDate;
let selectedid = null;
let splitArray;
let clickCheck = false;
let allDivs;
let StringArray = ["Wo-2-9","Do-2-12","Ma-2-14","Ma-3-9","Ma-3-10","Ma-4-12","Ma-1-15"];
let FilterArray = [];
let IDArray = [];
let selectedidArray = [];
let vandaag;
let today;
let pastDaysArray = [];
let blok = [];
let weekCheck = 0;

// WeeknumberFunction
function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  return weekNo;
}
let futureWeek = getWeekNumber(new Date());
const currentWeek = getWeekNumber(new Date());

// Weekmenu
nextArrow.addEventListener("click", () => {
  //weeknumber
  futureWeek++;
  if (futureWeek > 53) {futureWeek = 1}
  document.querySelector(".date h1").innerHTML = "Week " + futureWeek;
  FilterArray = [];
  createTable();
  runFunctions();
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
});

  prevArrow.addEventListener("click", () => {
    if (weekCheck == 1) {
      //weeknumber
      futureWeek--;
      if (futureWeek < 1) {futureWeek = 53}
      document.querySelector(".date h1").innerHTML = "Week " + futureWeek;
      FilterArray = [];
      createTable();
      runFunctions();
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
    }
  });

firstDay.innerHTML = firstDate.getDate() + " " + weekMonth(0);
lastDay.innerHTML = lastDate.getDate() + " " + weekMonth(1);
document.querySelector(".date h1").innerHTML = "Week " + futureWeek;

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
  hour = "";
  for (let j = 1; j <= 63; j++) {
    if(j<8) {
      hour += "<div id="+(dagen[j-1])+"-"+futureWeek+"-9"+" class='available' onClick='isClicked(this.id)'>9:00-10:00</div>";
    }
    else if(j<15) {
      hour += "<div id="+(dagen[j-7-1])+"-"+futureWeek+"-10"+" class='available' onClick='isClicked(this.id)'>10:00-11:00</div>";
    }
    else if(j<22) {
      hour += "<div id="+(dagen[j-7*2-1])+"-"+futureWeek+"-11"+" class='available' onClick='isClicked(this.id)'>11:00-12:00</div>";
    }
    else if(j<29) {
      hour += "<div id="+(dagen[j-7*3-1])+"-"+futureWeek+"-12"+" class='available' onClick='isClicked(this.id)'>12:00-13:00</div>";
    }
    else if(j<36) {
      hour += "<div id="+(dagen[j-7*4-1])+"-"+futureWeek+"-13"+" class='available' onClick='isClicked(this.id)'>13:00-14:00</div>";
    }
    else if(j<43) {
      hour += "<div id="+(dagen[j-7*5-1])+"-"+futureWeek+"-14"+" class='available' onClick='isClicked(this.id)'>14:00-15:00</div>";
    }
    else if(j<50) {
      hour += "<div id="+(dagen[j-7*6-1])+"-"+futureWeek+"-15"+" class='available' onClick='isClicked(this.id)'>15:00-16:00</div>";
    }
    else if(j<57) {
      hour += "<div id="+(dagen[j-7*7-1])+"-"+futureWeek+"-16"+" class='available' onClick='isClicked(this.id)'>16:00-17:00</div>";
    }
    else if(j<64) {
      hour += "<div id="+(dagen[j-7*8-1])+"-"+futureWeek+"-17"+" class='available' onClick='isClicked(this.id)'>17:00-18:00</div>";
    }
    calenderHours.innerHTML = hour;
  }
};
createTable();


//Vandaag
function Today() {
  const todayDate = new Date(2021, 0, 15);
  today = dagen[todayDate.getDay() - (todayDate.getDay() == 0 ? -6 : 1)];
  vandaag = document.querySelector("#"+today+"");
  if (currentWeek == futureWeek) {
    vandaag.style.backgroundColor = "white";
    vandaag.style.color = "#303030"
  }
  else {
    vandaag.style.backgroundColor = "#303030";
    vandaag.style.color = "white";
  }
};

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

function FilterIDs() {
  for (j = 0; j <= StringArray.length-1; j++) {
    const split = StringArray[j].split("-");
    if (split[1] == futureWeek) {
      FilterArray.push(StringArray[j]);
    }
  }
}

function isClicked(clickedID) {
  getFirstDate();
  rememberActive();
  selectedID = document.querySelector("#"+clickedID+"");
  if (selectedID.classList.contains("available")) {
    allDivs = document.getElementById("calenderHours").querySelectorAll(".active");
    Array.from(allDivs, e => e.classList.remove("active"));
    selectedID.classList.add("active");
    splitArray = clickedID.split("-");
    selectedDay = splitArray[0];
    selectedTime = splitArray[2];
    selectedDate.setDate(FirstDate.getDate() + dayNumber[splitArray[0]]);
    selectedid = selectedID.id;
    clickCheck = true;
  }
}
function getFirstDate() {
  const dateFirst = firstDay.innerHTML;
  const firstDateArray = dateFirst.split(" ");
  const shortMonth = monthShort[firstDateArray[1]];
  FirstDate = new Date(2021, shortMonth, firstDateArray[0]);  
}
function makeAvailable() {
  for (let j = 0; j <= FilterArray.length-1; j++) {
    IDArray.push(document.querySelector("#"+FilterArray[j]+""));
  }
  Array.from(IDArray, e => e.classList.remove("available"));
  Array.from(IDArray, e => e.classList.remove("today"));

  const classActive = document.querySelectorAll(".available")
  Array.from(classActive, e => e.style.opacity = "100%");
}
function rememberActive() {
  if (tijdsvakData != null && selectedid == null) {
    selectedidArray = tijdsvakData.split("-")
    if (selectedidArray[1] == futureWeek) {
      document.querySelector("#"+tijdsvakData+"").classList.add("active");
    }
  } else if (selectedid != null) {
    selectedidArray = selectedid.split("-")
    if (selectedidArray[1] == futureWeek) {
      document.querySelector("#"+selectedid+"").classList.add("active");
    }
  }
}
function makeUnavailable() {
  todayIndex = dagen.indexOf(""+today+"");
  for (j = 0; j <= dagen.length; j++) {
    if (j < todayIndex) {
      pastDaysArray.push(dagen[j]);
    }
  }
  for (j = 0; j <= pastDaysArray.length-1; j++) {
    blok.push(document.querySelectorAll('[id^='+pastDaysArray[j]+']'));
  }
  for (j = 0; j <= blok.length-1; j++) {
    if (futureWeek == currentWeek) {
      Array.from(blok[j], e => e.style.opacity = "50%");
      Array.from(blok[j], e => e.classList.remove("available"));
    } else {
      Array.from(blok[j], e => e.style.opacity = "100%");
    }
  }
}
function pastWeekCheck () {
  if (futureWeek > currentWeek) {
    weekCheck = 1;
    prevArrow.style.opacity = "100%";
    prevArrow.style.cursor = "pointer";
  } else {
    weekCheck = 0;
    prevArrow.style.opacity = "50%";
    prevArrow.style.cursor = "default";
  }
}

function runFunctions() {
  FilterIDs();
  Today();
  makeAvailable();
  rememberActive();
  makeUnavailable();
  pastWeekCheck();
}
runFunctions();


// Send to database
rightArrow.addEventListener("click", () => {
  localStorage.setItem("tijdsvak", ""+selectedid+"");
  localStorage.setItem("dag", ""+fullDaysNames[selectedDay]+"");
  localStorage.setItem("datum", ""+selectedDate.getDate()+" "+maanden[selectedDate.getMonth()]+"");
  localStorage.setItem("tijd", ""+selectedTime+":00 - "+(parseInt(selectedTime)+1)+":00");
  if (clickCheck) {
    window.location.assign("../contactGegevens/contactGegevens.html");
  }
});

// setInterval(() => {
//   console.log(selectedDate, FirstDate)
// }, 3000)

function test() {
  
}
test();
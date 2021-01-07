const infoIcon_baard = document.getElementById("Knippen_baard");
const infoIcon_wassen = document.getElementById("wassen");
const infoIcon_bijknippen = document.getElementById("bijknippen");
const infoIcon_kort = document.getElementById("Knippen_kort");
const infoIcon_krullen = document.getElementById("Knippen_krullen");
const infoIcon_lang = document.getElementById("Knippen_lang");

const closeIcon = document.getElementById("closeIcon");
const infoPopup = document.getElementById("infoPopup");

const item_knippen_baard = document.getElementById("item_knippen_baard");
const item_wassen = document.getElementById("item_wassen");
const item_bijknippen = document.getElementById("item_bijknippen");
const item_knippen_kort = document.getElementById("item_knippen_kort");
const item_knippen_krullen = document.getElementById("item_knippen_krullen");
const item_knippen_lang = document.getElementById("item_knippen_lang");

const aantal_behandelingen = document.getElementById("behandelingsAantal");
let behandelingsAantal = 0;
let behandelingenArr = [];

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

aantal_behandelingen.innerHTML = behandelingsAantal;

infoPopup.style.display = "none";



function mouseOver_unclicked () {
  item_knippen_baard.style.background = "blue";
}

function mouseOver_clicked () {
  item_knippen_baard.style.background = "green";
}

function mouseOut_clicked() {
  item_knippen_baard.style.background = "green";
}
function mouseOut_unclicked() {
  item_knippen_baard.style.background = "white";
}

if (behandelingenArr.indexOf("knippen_baard") == -1) {
  item_knippen_baard.onmouseover = function() {mouseOver_unclicked()};
  item_knippen_baard.onmouseout = function() {mouseOut_unclicked()}
}
if (behandelingenArr.indexOf("knippen_baard") != -1) {
  item_knippen_baard.onmouseout = function() {mouseOut_clicked()}
  item_knippen_baard.onmouseover = function() {mouseOver_clicked()}

}


rightArrow.addEventListener("click", () => {
  if (behandelingenArr.length != 0) {
    localStorage.setItem("behandelingen", JSON.stringify(behandelingenArr));
  }
});

item_knippen_baard.addEventListener("click", () => {
  if (behandelingenArr.indexOf("knippen_baard") == -1) {
    item_knippen_baard.style.background = "green";
    behandelingsAantal++;
    behandelingenArr.push("knippen_baard")
  }
  else {
    behandelingsAantal--;
    const index = behandelingenArr.indexOf("knippen_baard");
    if (index > -1) {
      behandelingenArr.splice(index, 1);
    } 
  }
  aantal_behandelingen.innerHTML = behandelingsAantal;
});

// setInterval(() => {
//   console.log(behandelingenArr.indexOf("knippen_baard") == -1)
// }, 3000)

item_wassen.addEventListener("click", () => {
  if (item_wassen.style.background != "rgb(56, 129, 72)") {
    item_wassen.style.background = "rgb(56, 129, 72)";
    behandelingsAantal++;
    behandelingenArr.push("wassen")
  }
  else {
    item_wassen.style.background = "none";
    behandelingsAantal--;
    const index = behandelingenArr.indexOf("wassen");
    if (index > -1) {
      behandelingenArr.splice(index, 1);
    }
  }
  aantal_behandelingen.innerHTML = behandelingsAantal;
});

item_bijknippen.addEventListener("click", () => {
  if (item_bijknippen.style.background != "rgb(56, 129, 72)") {
    item_bijknippen.style.background = "rgb(56, 129, 72)"
    behandelingsAantal++;
    behandelingenArr.push("bijknippen")
  }
  else {
    item_bijknippen.style.background = "none"
    behandelingsAantal--;
    const index = behandelingenArr.indexOf("bijknippen");
    if (index > -1) {
      behandelingenArr.splice(index, 1);
    }
  }
  aantal_behandelingen.innerHTML = behandelingsAantal;
});

item_knippen_kort.addEventListener("click", () => {
  if (item_knippen_kort.style.background != "rgb(56, 129, 72)") {
    item_knippen_kort.style.background = "rgb(56, 129, 72)";
    behandelingsAantal++;
    behandelingenArr.push("knippen_kort")
  }
  else {
    item_knippen_kort.style.background = "none";
    behandelingsAantal--;
    const index = behandelingenArr.indexOf("knippen_kort");
    if (index > -1) {
      behandelingenArr.splice(index, 1);
    }
  }
  aantal_behandelingen.innerHTML = behandelingsAantal;
});

item_knippen_krullen.addEventListener("click", () => {
  if (item_knippen_krullen.style.background != "rgb(56, 129, 72)") {
    item_knippen_krullen.style.background = "rgb(56, 129, 72)";
    behandelingsAantal++;
    behandelingenArr.push("knippen_krullen")
  }
  else {
    item_knippen_krullen.style.background = "none";
    behandelingsAantal--;
    const index = behandelingenArr.indexOf("knippen_krullen");
    if (index > -1) {
      behandelingenArr.splice(index, 1);
    }
  }
  aantal_behandelingen.innerHTML = behandelingsAantal;
});

item_knippen_lang.addEventListener("click", () => {
  if (item_knippen_lang.style.background != "rgb(56, 129, 72)") {
    item_knippen_lang.style.background = "rgb(56, 129, 72)";
    behandelingsAantal++;
    behandelingenArr.push("knippen_lang")
  }
  else {
    item_knippen_lang.style.background = "none";
    behandelingsAantal--;
    const index = behandelingenArr.indexOf("knippen_lang");
    if (index > -1) {
      behandelingenArr.splice(index, 1);
    }
  }
  aantal_behandelingen.innerHTML = behandelingsAantal;
});



infoIcon_baard.addEventListener("click", () => {
  infoPopup.style.display = "block";
});

infoIcon_wassen.addEventListener("click", () => {
  infoPopup.style.display = "block";
});

infoIcon_bijknippen.addEventListener("click", () => {
  infoPopup.style.display = "block";
});

infoIcon_kort.addEventListener("click", () => {
  infoPopup.style.display = "block";
});

infoIcon_krullen.addEventListener("click", () => {
  infoPopup.style.display = "block";
});

infoIcon_lang.addEventListener("click", () => {
  infoPopup.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  infoPopup.style.display = "none";
});

leftArrow.addEventListener("click", () => {
  window.location.assign("../gegevensMenu/gegevensMenu.html");
});


// setInterval(() => {
//   localStorage.clear();
// }, 10000)

// setInterval(() => {
//   console.log(localStorage);
// }, 2000);

// setInterval(() => {
//   console.log(behandelingenArr);
// }, 2000);

const infoIcon_baard = document.getElementById("Knippen_baard");
const closeIcon_baard = document.getElementById("closeIcon_baard");
const infoPopup_baard = document.getElementById("infoPopup_baard");

const item_knippen_baard = document.getElementById("item_knippen_baard");
const item_wassen = document.getElementById("item_wassen");
const item_bijknippen = document.getElementById("item_bijknippen");
const item_knippen_kort = document.getElementById("item_knippen_kort");
const item_knippen_krullen = document.getElementById("item_knippen_krullen");
const item_knippen_lang = document.getElementById("item_knippen_lang");

const aantal_behandelingen = document.getElementById("behandelingsAantal");
var behandelingsAantal = 0;

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

infoPopup_baard.style.display = "none";

aantal_behandelingen.innerHTML = behandelingsAantal;

item_knippen_baard.addEventListener("click", () => {
  if (item_knippen_baard.style.background != "rgb(56, 129, 72)") {
    item_knippen_baard.style.background = "rgb(56, 129, 72)";
    behandelingsAantal++;
  }
  else {
    item_knippen_baard.style.background = "none";
    behandelingsAantal--;
  }
  aantal_behandelingen.innerHTML = behandelingsAantal;
});



item_wassen.addEventListener("click", () => {
  if (item_wassen.style.background != "rgb(56, 129, 72)") {
    item_wassen.style.background = "rgb(56, 129, 72)";
    behandelingsAantal++;
  }
  else {
    item_wassen.style.background = "none";
    behandelingsAantal--;
  }
  aantal_behandelingen.innerHTML = behandelingsAantal;
});

item_bijknippen.addEventListener("click", () => {
  if (item_bijknippen.style.background != "rgb(56, 129, 72)") {
    item_bijknippen.style.background = "rgb(56, 129, 72)"
    behandelingsAantal++;
  }
  else {
    item_bijknippen.style.background = "none"
    behandelingsAantal--;
  }
  aantal_behandelingen.innerHTML = behandelingsAantal;
});

item_knippen_kort.addEventListener("click", () => {
  if (item_knippen_kort.style.background != "rgb(56, 129, 72)") {
    item_knippen_kort.style.background = "rgb(56, 129, 72)";
    behandelingsAantal++;
  }
  else {
    item_knippen_kort.style.background = "none";
    behandelingsAantal--;
  }
  aantal_behandelingen.innerHTML = behandelingsAantal;
});

item_knippen_krullen.addEventListener("click", () => {
  if (item_knippen_krullen.style.background != "rgb(56, 129, 72)") {
    item_knippen_krullen.style.background = "rgb(56, 129, 72)";
    behandelingsAantal++;
  }
  else {
    item_knippen_krullen.style.background = "none";
    behandelingsAantal--;
  }
  aantal_behandelingen.innerHTML = behandelingsAantal;
});

item_knippen_lang.addEventListener("click", () => {
  if (item_knippen_lang.style.background != "rgb(56, 129, 72)") {
    item_knippen_lang.style.background = "rgb(56, 129, 72)";
    behandelingsAantal++;
  }
  else {
    item_knippen_lang.style.background = "none";
    behandelingsAantal--;
  }
  aantal_behandelingen.innerHTML = behandelingsAantal;
});

infoIcon_baard.addEventListener("click", () => {
  infoPopup_baard.style.display = "block";
});

closeIcon_baard.addEventListener("click", () => {
  infoPopup_baard.style.display = "none";
});



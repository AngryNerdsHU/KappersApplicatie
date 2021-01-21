const overlay = document.querySelector("#overlay")
const closeIcon = document.getElementById("closeIcon");
const infoPopup = document.getElementById("infoPopup");
const aantal_behandelingen = document.getElementById("behandelingsAantal");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
let behandelingsAantal = 0;
let behandelingenArr = [];

const nextPage = function () {
  localStorage.setItem("behandelingen", ""+behandelingenArr+"");
  window.location.assign("../calender/calender.html");
};

const alertBehandelingen = function () {
  window.alert("Selecteer eerst uw gewenste behandeling(en)");
};

infoPopup.style.display = "none";
rightArrow.style.opacity = "50%";

function infoIcons(clickedIcon) {
  overlay.style.display = "block";
  infoPopup.style.display = "block";

};

closeIcon.addEventListener("click", () => {
  infoPopup.style.display = "none";
  overlay.style.display = "none";
});

function itemClicked(clickedID) {
  geselecteerdeBehandeling = document.querySelector("#"+clickedID+"");
  if (geselecteerdeBehandeling.style.background != "rgb(56, 129, 72)") {
    geselecteerdeBehandeling.style.background = "rgb(56, 129, 72)";
    behandelingsAantal++;
    behandelingenArr.push("\u00a0"+clickedID+"");
  }
  else {
    geselecteerdeBehandeling.style.background = "none";
    behandelingsAantal--;
    const index = behandelingenArr.indexOf(""+clickedID+"");
    if (index > -1) {
      behandelingenArr.splice(index, 1);
    } 
  }
  aantal_behandelingen.innerHTML = behandelingsAantal;
  if (behandelingenArr.length == 0) {
    rightArrow.style.opacity = "50%";
    rightArrow.style.cursor = "default";
    rightArrow.addEventListener("click", alertBehandelingen, true);
    rightArrow.removeEventListener("click", nextPage, true);
    
  }
  else {
    rightArrow.style.opacity = "100%";
    rightArrow.style.cursor = "pointer";
    rightArrow.removeEventListener("click", alertBehandelingen, true);
    rightArrow.addEventListener("click", nextPage, true);
  }
};
rightArrow.addEventListener("click", alertBehandelingen, true);

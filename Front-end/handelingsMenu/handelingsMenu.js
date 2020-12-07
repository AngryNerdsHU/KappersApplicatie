const infoIcon = document.getElementById("infoIcon");
const closeIcon = document.getElementById("closeIcon");
const infoPopup = document.getElementById("infoPopup");

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

infoPopup.style.display = "none";

infoIcon.addEventListener("click", () => {
  infoPopup.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  infoPopup.style.display = "none";
});

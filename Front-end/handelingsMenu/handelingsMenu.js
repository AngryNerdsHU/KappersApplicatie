const infoIcon = document.getElementById("infoIcon");
const closeIcon = document.getElementById("closeIcon");
const infoPopup = document.getElementById("infoPopup");

infoPopup.style.display = "none";

infoIcon.addEventListener("click", () => {
  infoPopup.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  infoPopup.style.display = "none";
});
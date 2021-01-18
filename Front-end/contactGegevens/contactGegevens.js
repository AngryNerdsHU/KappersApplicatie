const fname = document.querySelector("#fname");
const email = document.querySelector("#email");
const rightArrow = document.querySelector("#rightArrow");
const nextPage = function () {
  window.location.assign("../bevestigingsPagina/bevestigingsPagina.html");
  localStorage.setItem("fname", ""+fname.value+"");
  localStorage.setItem("email", ""+email.value+"");
};
const alertGegevens = function () {
  window.alert("Vul eerst uw gegevens in");
};
rightArrow.style.opacity = "50%"

function validation() {
  if (fname.value != "" && email.value != "") {
    rightArrow.style.opacity = "100%";
    rightArrow.addEventListener("click", nextPage, true);
  }
  else {
    rightArrow.removeEventListener("click", nextPage, true);
    rightArrow.style.opacity = "50%";
  }
}

validation();





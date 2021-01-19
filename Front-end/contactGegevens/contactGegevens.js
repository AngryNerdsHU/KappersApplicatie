const fname = document.querySelector("#fname");
const email = document.querySelector("#email");
const rightArrow = document.querySelector("#rightArrow");
const input = document.querySelector("input");
const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const fnameFormat = /^[a-zA-Z]+ [a-zA-Z]+(?:\.[a-zA-Z0-9-]+)*$/;
const clickOnNextPage = function() {
  localStorage.setItem("fname", ""+fname.value+"");
  localStorage.setItem("email", ""+email.value+"");
  window.location.assign("../bevestegingsPagina/bevestegingsPagina.html");
}
const alertGegevens = function() {
  window.alert("Vul eerst uw contactgegevens in");
}

function validate() {
  if (fname.value.match(fnameFormat) && email.value.match(mailFormat)) {
    rightArrow.style.opacity = "100%";
    rightArrow.style.cursor = "pointer";
    rightArrow.removeEventListener("click", alertGegevens, true);
    rightArrow.addEventListener("click", clickOnNextPage, true);
  }
  else {
    rightArrow.style.opacity = "50%";
    rightArrow.style.cursor = "default";
    rightArrow.removeEventListener("click", clickOnNextPage, true);
    rightArrow.addEventListener("click", alertGegevens, true);
    }
  }

rightArrow.style.opacity = "50%";
rightArrow.addEventListener("click", alertGegevens, true);






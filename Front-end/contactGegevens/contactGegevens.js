const fname = document.querySelector("#fname");
const email = document.querySelector("#email");
const rightArrow = document.querySelector("#rightArrow");

function submitInfo() {
  localStorage.setItem("fname", ""+fname.value+"");
  localStorage.setItem("email", ""+email.value+"");
  console.log(fname.value);
  console.log(localStorage);
}

rightArrow.addEventListener("click", () => {
  if (fname.value != "" && email.value != "") {
    window.location.assign("../bevestegingsPagina/bevestegingsPagina.html");
  }
  submitInfo();
});
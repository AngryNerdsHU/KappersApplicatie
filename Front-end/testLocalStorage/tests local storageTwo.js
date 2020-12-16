console.log(localStorage.getItem("name"))

const backButton = document.getElementById("backButton")

backButton.addEventListener("click", () => {
    window.location.assign("index.html");
});
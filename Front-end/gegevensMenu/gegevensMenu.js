export {myUrl}; 

const man = document.querySelector("#man");
const vrouw = document.querySelector("#vrouw");
const title = document.querySelector("#title");
const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");
const age = document.querySelector("#age");
const gender = document.querySelector("#gender");
const options = document.querySelector("#options");
const breakLine = document.querySelector(".breakLine");
const kind = document.querySelector("#kind");
const jongvolwassene = document.querySelector("#jongvolwassene");
const volwassene = document.querySelector("#volwassene");
const senior = document.querySelector("#senior");
const ageImage = document.querySelectorAll(".ageImage");

let myUrl = "test"; // new URL("http://127.0.0.1:5500/Front-end/gegevensMenu/gegevensMenu.html");
let nextCheck = 0;
let ageClickable = 0;
let manCheck = 0;
let vrouwCheck = 0;
let arrowCheck = 0;
let speed = 1;
let kindCheck = 0;
let jongvolwasseneCheck = 0;
let volwasseneCheck = 0;
let seniorCheck = 0;

age.style.display = "none";
breakLine.style.display = "none";
man.style.opacity = .5;
vrouw.style.opacity = .5;
leftArrow.style.opacity = .5;
rightArrow.style.opacity = .5;

const tl = new TimelineMax();

tl.fromTo(title, speed, {y: "-200%"}, {y: "0%"})
tl.fromTo(man, speed, {transform: "scale(0)", opacity: 0}, {transform: "scale(1)", opacity: .5}, "-=1")
tl.fromTo(man, speed, {x: "-300%"}, {x: "0%"}, "-=1")
tl.fromTo(vrouw, speed, {transform: "scale(0)", opacity: 0}, {transform: "scale(1)", opacity: .5}, "-=1")
tl.fromTo(vrouw, speed, {x: "300%"}, {x: "0%"}, "-=1")
tl.fromTo(leftArrow, speed, {x: "-300%"}, {x: "0%"}, "-=1")
tl.fromTo(rightArrow, speed, {x: "300%"}, {x: "0%"}, "-=1")

man.addEventListener("click", () => {
  tl.fromTo(man, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1})
  if (vrouwCheck == 1) {
    tl.fromTo(vrouw, .5, {transform: "scale(1.05)", opacity: 1}, {transform: "scale(1)", opacity: .5}, "-=.5")
    vrouwCheck = 0;
  }
  manCheck = 1;
  if (arrowCheck == 0) {
    rightArrow.style.cursor = "pointer";
    tl.fromTo(rightArrow, speed, {opacity: .5}, {opacity: 1}, "-=1")
    arrowCheck = 1;
  }
  // myUrl.searchParams.set("gender", "man");
});
vrouw.addEventListener("click", () => {
  tl.fromTo(vrouw, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1})
  if (manCheck == 1) {
    tl.fromTo(man, .5, {transform: "scale(1.05)", opacity: 1}, {transform: "scale(1)", opacity: .5}, "-=.5")
    manCheck = 0;
  }
  vrouwCheck = 1;
  if (arrowCheck == 0) {
    tl.fromTo(rightArrow, speed, {opacity: .5}, {opacity: 1}, "-=1")
    arrowCheck = 1;
  }
  // myUrl.searchParams.set("gender", "vrouw");
});
rightArrow.addEventListener("click", () => {
  if (arrowCheck == 1) {
    tl.fromTo(rightArrow, speed, {opacity: "1"}, {opacity: ".5"})
    man.style.width = "240px";
    man.style.height = "240px";
    vrouw.style.width = "240px";
    vrouw.style.height = "240px";
    if (manCheck == 1) {
      tl.fromTo(man, speed, {transform: "scale(1.6)"}, {transform: "scale(1.05)"}, "-=1")
      tl.fromTo(vrouw, speed, {transform: "scale(1.6)"}, {transform: "scale(1)"}, "-=1")
    } else {
      tl.fromTo(man, speed, {transform: "scale(1.6)"}, {transform: "scale(1)"})
    tl.fromTo(vrouw, speed, {transform: "scale(1.6)"}, {transform: "scale(1.05)"}, "-=1")
    }
    tl.fromTo(man, speed, {x: "-80px"}, {x: "0px"}, "-=1")
    tl.fromTo(vrouw, speed, {x: "60px"}, {x: "0px"}, "-=1")
    age.style.display = "flex";
    for (var i = 0; i < ageImage.length; i++) {
      tl.fromTo(ageImage[i], speed, {transform: "scale(0)", opacity: "0"}, {transform: "scale(1)", opacity: ".5"}, "-=1");
    }
    tl.fromTo(gender, speed, {y: "0%"}, {y: "-40%"})
    tl.fromTo(age, speed, {y: "0%"}, {y: "40%"}, "-=1")
    setTimeout(function() {
      breakLine.style.display = "block";
    }, 500);
    tl.fromTo(breakLine, speed, {scaleX: "0", opacity: "0"}, {scaleX: "1", opacity: "1"})
  } else if (arrowCheck == 2) {
    window.location.assign("../handelingsMenu/handelingsMenu.html");
  }
});





function selectOption(option, optionCheck) {
  tl.fromTo(option, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1})
  let optionNumber = optionCheck;
  console.log(optionNumber);
}
function checkOption(option, optionCheck) {
  if (optionCheck == 1) {
    tl.fromTo(option, .5, {transform: "scale(1.05)", opacity: 1}, {transform: "scale(1)", opacity: .5}, "-=.5")
    optionCheck = 0;
  }
}
function checkArrow() {
  if (arrowCheck == 1) {
    rightArrow.style.cursor = "pointer";
    tl.fromTo(rightArrow, speed, {opacity: .5}, {opacity: 1})
    arrowCheck = 2;
  }
}

kind.addEventListener("click", () => {
  selectOption(kind, 1);
  checkOption(jongvolwassene, 2);
  checkOption(volwassene, 3);
  checkOption(senior, 4);
  checkArrow();
});
jongvolwassene.addEventListener("click", () => {
  selectOption(jongvolwassene, 2);
  checkOption(kind, kindCheck);
  checkOption(volwassene, volwasseneCheck);
  checkOption(senior, seniorCheck);
  checkArrow();
});
volwassene.addEventListener("click", () => {
  selectOption(volwassene, 3);
  checkOption(kind, kindCheck);
  checkOption(jongvolwassene, jongvolwasseneCheck);
  checkOption(senior, seniorCheck);
  checkArrow();
});
senior.addEventListener("click", () => {
  selectOption(senior, 4);
  checkOption(kind, kindCheck);
  checkOption(jongvolwassene, jongvolwasseneCheck);
  checkOption(volwassene, volwasseneCheck);
  checkArrow();
});


setInterval(function() {
  console.log(myUrl);
}, 3000);




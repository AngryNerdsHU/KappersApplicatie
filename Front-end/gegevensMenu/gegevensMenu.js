// Const variables
const man = document.querySelector("#man"),
      vrouw = document.querySelector("#vrouw"),
      title = document.querySelector("#title"),
      leftArrow = document.querySelector("#leftArrow"),
      rightArrow = document.querySelector("#rightArrow"),
      age = document.querySelector("#age"),
      gender = document.querySelector("#gender"),
      options = document.querySelector("#options"),
      breakLine = document.querySelector(".breakLine"),
      kind = document.querySelector("#kind"),
      jongvolwassene = document.querySelector("#jongvolwassene"),
      volwassene = document.querySelector("#volwassene"),
      senior = document.querySelector("#senior"),
      ageImage = document.querySelectorAll(".ageImage");

// Let variables
let nextCheck = 0,
    ageClickable = 0,
    manCheck = 0,
    vrouwCheck = 0,
    arrowCheck = 0,
    speed = 1,
    kindCheck = false,
    jongvolwasseneCheck = false,
    volwasseneCheck = false,
    seniorCheck = false;

// Initialize properties
age.style.display = "none";
breakLine.style.display = "none";
man.style.opacity = .5;
vrouw.style.opacity = .5;
leftArrow.style.opacity = .5;
rightArrow.style.opacity = .5;

if (localStorage.getItem("gender") == null) {localStorage.setItem("gender", "none")};
if (localStorage.getItem("age") == null) {localStorage.setItem("age", "none")};

// Initial animations
const tl = new TimelineMax();

tl.fromTo(title, speed, {y: "-200%"}, {y: "0%"})
tl.fromTo(man, speed, {transform: "scale(0)", opacity: 0}, {transform: "scale(1)", opacity: .5}, "-=1")
tl.fromTo(man, speed, {x: "-300%"}, {x: "0%"}, "-=1")
tl.fromTo(vrouw, speed, {transform: "scale(0)", opacity: 0}, {transform: "scale(1)", opacity: .5}, "-=1")
tl.fromTo(vrouw, speed, {x: "300%"}, {x: "0%"}, "-=1")
leftArrow.style.display = "none";
rightArrow.style.display = "none";

// 
man.addEventListener("click", () => {
  clickGender(man, 1, 0);
});
if (localStorage.getItem("gender") == "man") {
  tl.fromTo(man, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
  setTimeout(function() {
    localStorage.setItem("gender", "man");
  }, 500);
  manCheck = 1;
}



vrouw.addEventListener("click", () => {
  clickGender(vrouw, 0, 1);
});
if (localStorage.getItem("gender") == "vrouw") {
  tl.fromTo(vrouw, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
  setTimeout(function() {
    localStorage.setItem("gender", "vrouw");
  }, 500);
  vrouwCheck = 1;
}

function clickGender(cGender, manValue, vrouwValue) {
  if (age.style.display == "flex") {
    if (manCheck == 1) {
      tl.fromTo(man, .5, {transform: "scale(1.05)", opacity: 1}, {transform: "scale(1)", opacity: .5})
      manCheck = 0;
    } else if (vrouwCheck == 1) {
      tl.fromTo(vrouw, .5, {transform: "scale(1.05)", opacity: 1}, {transform: "scale(1)", opacity: .5})
      vrouwCheck = 0;
    }
    tl.fromTo(cGender, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1}, "-=.5")
    manCheck = manValue;
    vrouwCheck = vrouwValue;
  }
  localStorage.setItem("gender", cGender.id);
  if (age.style.display != "flex") {
    manCheck = manValue;
    vrouwCheck = vrouwValue;
    AgeTransistion();
  }
}

function AgeTransistion() {
  tl.fromTo(rightArrow, speed, {opacity: "1"}, {opacity: ".5"}, "-=1")
  man.style.width = "240px";
  man.style.height = "240px";
  vrouw.style.width = "240px";
  vrouw.style.height = "240px";
  if (manCheck == 1) {
    tl.fromTo(man, speed, {transform: "scale(1.6)"}, {transform: "scale(1.05)"}, "-=1")
    tl.fromTo(vrouw, speed, {transform: "scale(1.6)"}, {transform: "scale(1)"}, "-=1")
  } else if (vrouwCheck == 1) {
    tl.fromTo(man, speed, {transform: "scale(1.6)"}, {transform: "scale(1)"})
    tl.fromTo(vrouw, speed, {transform: "scale(1.6)"}, {transform: "scale(1.05)"}, "-=1")
  }
  tl.fromTo(man, speed, {x: "-80px"}, {x: "0px"}, "-=1")
  tl.fromTo(vrouw, speed, {x: "60px"}, {x: "0px"}, "-=1")
  age.style.display = "flex";
  leftArrow.style.display = "flex";
  rightArrow.style.display = "flex";
  tl.fromTo(leftArrow, speed, {x: "-300%"}, {x: "0%"})
  tl.fromTo(rightArrow, speed, {x: "300%"}, {x: "0%"}, "-=1")
  for (var i = 0; i < ageImage.length; i++) {
    tl.fromTo(ageImage[i], speed, {transform: "scale(0)", opacity: "0"}, {transform: "scale(1)", opacity: ".5"}, "-=1");
  }
  tl.fromTo(gender, speed, {y: "0%"}, {y: "-40%"})
  tl.fromTo(age, speed, {y: "0%"}, {y: "40%"}, "-=1")
  setTimeout(function() {
    breakLine.style.display = "block";
  }, 500);
  tl.fromTo(breakLine, speed, {scaleX: "0", opacity: "0"}, {scaleX: "1", opacity: "1"})
  if (manCheck == 1) {
    tl.fromTo(man, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1})
    manCheck = 1;
    vrouwCheck = 0;
  }
  if (vrouwCheck == 1) {
    tl.fromTo(vrouw, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1})
    manCheck = 0;
    vrouwCheck = 1;
  }
  if ((localStorage.getItem("age") == "kind")) {
    tl.fromTo(kind, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
  } else if ((localStorage.getItem("age") == "jongvolwassene")) {
    tl.fromTo(jongvolwassene, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
  } else if ((localStorage.getItem("age") == "volwassene")) {
    tl.fromTo(volwassene, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
  } else if ((localStorage.getItem("age") == "senior")) {
    tl.fromTo(senior, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
  }
  if (localStorage.getItem("gender") != "none" && localStorage.getItem("age") != "none") {
    tl.fromTo(rightArrow, .5, {opacity: .5}, {opacity: 1})
    rightArrow.style.cursor = "pointer";
    arrowCheck = 1;
  }
}
if (localStorage.getItem("gender") != "none") {
  AgeTransistion();
}

rightArrow.addEventListener("click", () => {
  if (arrowCheck == 0) {
    alert("Selecteer eerst uw geslacht en leeftijd");
  }
  if (arrowCheck == 1) {
    window.location.assign("../handelingsMenu/handelingsMenu.html");
  }
});




function selectOption(option) {
  tl.fromTo(option, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
  checkArrow();
}
function checkOption(option) {
  tl.fromTo(option, .5, {transform: "scale(1.05)", opacity: 1}, {transform: "scale(1)", opacity: .5}, "-=.5");
  kindCheck = false;
  jongvolwasseneCheck = false;
  volwasseneCheck = false;
  seniorCheck = false;
}
function checkArrow() {
  if (arrowCheck == 0) {
    rightArrow.style.cursor = "pointer";
    tl.fromTo(rightArrow, .5, {opacity: .5}, {opacity: 1})
    arrowCheck = 1;
  }
  checkArrow.called = true;
}

// Age options
kind.addEventListener("click", () => {
  selectOption(kind);
  if (jongvolwasseneCheck == true) {checkOption(jongvolwassene)};
  if (volwasseneCheck == true) {checkOption(volwassene)};
  if (seniorCheck == true) {checkOption(senior)};
  localStorage.setItem("age", "kind");
  kindCheck = true;
});
jongvolwassene.addEventListener("click", () => {
  selectOption(jongvolwassene);
  if (kindCheck == true) {checkOption(kind)};
  if (volwasseneCheck == true) {checkOption(volwassene)};
  if (seniorCheck == true) {checkOption(senior)};
  localStorage.setItem("age", "jongvolwassene");
  jongvolwasseneCheck = true;
});
volwassene.addEventListener("click", () => {
  selectOption(volwassene);
  if (kindCheck == true) {checkOption(kind)};
  if (jongvolwasseneCheck == true) {checkOption(jongvolwassene)};
  if (seniorCheck == true) {checkOption(senior)};
  localStorage.setItem("age", "volwassene");
  volwasseneCheck = true;
});
senior.addEventListener("click", () => {
  selectOption(senior);
  if (kindCheck == true) {checkOption(kind)};
  if (jongvolwasseneCheck == true) {checkOption(jongvolwassene)};
  if (volwasseneCheck == true) {checkOption(volwassene)};
  localStorage.setItem("age", "senior");
  seniorCheck = true;
});
if ((localStorage.getItem("gender") == "man")) {
  manCheck = 1;
}
if ((localStorage.getItem("gender") == "vrouw")) {
  vrouwCheck = 1;
}
if ((localStorage.getItem("age") == "kind")) {
  kindCheck = true;
}
if ((localStorage.getItem("age") == "jongvolwassene")) {
  jongvolwasseneCheck = true;
}
if ((localStorage.getItem("age") == "volwassene")) {
  volwasseneCheck = true;
}
if ((localStorage.getItem("age") == "senior")) {
  seniorCheck = true;
}
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
  clickGender(man, vrouw, 1, 0);
});
if (localStorage.getItem("gender") == "man") {
  tl.fromTo(man, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
  setTimeout(function() {
    localStorage.setItem("gender", "man");
  }, 500);
  manCheck = 1;
}



vrouw.addEventListener("click", () => {
  clickGender(vrouw, man, 0, 1);
  // if (age.style.display == "flex") {
  //   tl.fromTo(vrouw, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)",     opacity: 1})
  //   if (manCheck == 1) {
  //     tl.fromTo(man, .5, {transform: "scale(1.05)", opacity: 1}, {transform: "scale(1)", opacity: .5}, "-=.5")
  //     manCheck = 0;
  //   }
  //   vrouwCheck = 1;
  //   if (arrowCheck == 0) {
  //     rightArrow.style.cursor = "pointer";
  //     tl.fromTo(rightArrow, speed, {opacity: .5}, {opacity: 1}, "-=1")
  //     arrowCheck = 1;
  //   }
  // }
  // localStorage.setItem("gender", "vrouw");
  // if (age.style.display != "flex") {
  //   tl.fromTo(rightArrow, speed, {opacity: "1"}, {opacity: ".5"}, "-=1")
  //   man.style.width = "240px";
  //   man.style.height = "240px";
  //   vrouw.style.width = "240px";
  //   vrouw.style.height = "240px";
  //   if (vrouwCheck == 1) {
  //     tl.fromTo(vrouw, speed, {transform: "scale(1.6)"}, {transform: "scale(1.05)"}, "-=1")
  //     tl.fromTo(man, speed, {transform: "scale(1.6)"}, {transform: "scale(1)"}, "-=1")
  //   } else {
  //     tl.fromTo(vrouw, speed, {transform: "scale(1.6)"}, {transform: "scale(1)"})
  //     tl.fromTo(man, speed, {transform: "scale(1.6)"}, {transform: "scale(1.05)"}, "-=1")
  //   }
  //   tl.fromTo(man, speed, {x: "-80px"}, {x: "0px"}, "-=1")
  //   tl.fromTo(vrouw, speed, {x: "60px"}, {x: "0px"}, "-=1")
  //   age.style.display = "flex";
    
  //   for (var i = 0; i < ageImage.length; i++) {
  //     tl.fromTo(ageImage[i], speed, {transform: "scale(0)", opacity: "0"}, {transform: "scale(1)", opacity: ".5"}, "-=1");
  //   }
  //   tl.fromTo(gender, speed, {y: "0%"}, {y: "-40%"})
  //   tl.fromTo(age, speed, {y: "0%"}, {y: "40%"}, "-=1")
  //   setTimeout(function() {
  //     breakLine.style.display = "block";
  //   }, 500);
  //   tl.fromTo(breakLine, speed, {scaleX: "0", opacity: "0"}, {scaleX: "1", opacity: "1"})
  //   tl.fromTo(vrouw, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)",     opacity: 1})
  //   vrouwCheck = 1;
  //   if ((localStorage.getItem("age") == "kind")) {
  //     tl.fromTo(kind, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
  //   }
  // }
});
if (localStorage.getItem("gender") == "vrouw") {
  tl.fromTo(vrouw, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
  setTimeout(function() {
    localStorage.setItem("gender", "vrouw");
  }, 500);
  vrouwCheck = 1;
}

function clickGender(cGender, oGender, manValue, vrouwValue) {
  if (age.style.display == "flex") {
    tl.fromTo(cGender, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1})
    if (manCheck == 1 || vrouwCheck == 1) {
      tl.fromTo(oGender, .5, {transform: "scale(1.05)", opacity: 1}, {transform: "scale(1)", opacity: .5}, "-=.5")
      manCheck = 0;
      vrouwCheck = 0;
    }
    manCheck = manValue;
    vrouwCheck = vrouwValue;
  }
  localStorage.setItem("gender", ""+cGender+"");
  if (age.style.display != "flex") {
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
    tl.fromTo(cGender, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1})
    manCheck = manValue;
    vrouwCheck = vrouwValue;
    if ((localStorage.getItem("age") == "kind")) {
      tl.fromTo(kind, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
    }
    if ((localStorage.getItem("age") == "jongvolwassene")) {
      tl.fromTo(jongvolwassene, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
    }
    if ((localStorage.getItem("age") == "volwassene")) {
      tl.fromTo(volwassene, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
    }
    if ((localStorage.getItem("age") == "senior")) {
      tl.fromTo(senior, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1});
    }
  }
  console.log(manCheck);
  console.log(vrouwCheck);
}

rightArrow.addEventListener("click", () => {
  if (arrowCheck == 0) {
    rightArrow.style.cursor = "pointer";
    tl.fromTo(rightArrow, speed, {opacity: .5}, {opacity: 1}, "-=1")
    arrowCheck = 1;
  }
  if (arrowCheck == 2) {
    window.location.assign("../handelingsMenu/handelingsMenu.html");
  }
});





function selectOption(option, optionCheck) {
  tl.fromTo(option, .5, {transform: "scale(1)", opacity: .5}, {transform: "scale(1.05)", opacity: 1})
  let optionNumber = optionCheck;
  if (optionNumber == 1) {kindCheck = true};
  if (optionNumber == 2) {jongvolwasseneCheck = true};
  if (optionNumber == 3) {volwasseneCheck = true};
  if (optionNumber == 4) {seniorCheck = true};
}
function checkOption(option, optionNumber, optionCheck) {
  if (optionCheck == true) {
    tl.fromTo(option, .5, {transform: "scale(1.05)", opacity: 1}, {transform: "scale(1)", opacity: .5}, "-=.5")
    let optionNumbers = optionNumber;
    setTimeout(function() {
      if (optionNumbers == 1) {kindCheck = false};
      if (optionNumbers == 2) {jongvolwasseneCheck = false};
      if (optionNumbers == 3) {volwasseneCheck = false};
      if (optionNumbers == 4) {seniorCheck = false};
    }, 500);
  }
}
function checkArrow() {
  if (arrowCheck == 1) {
    rightArrow.style.cursor = "pointer";
    tl.fromTo(rightArrow, speed, {opacity: .5}, {opacity: 1})
    arrowCheck = 2;
  }
}

// Age options
kind.addEventListener("click", () => {
  selectOption(kind, 1);
  checkOption(jongvolwassene, 2, jongvolwasseneCheck);
  checkOption(volwassene, 3, volwasseneCheck);
  checkOption(senior, 4, seniorCheck);
  checkArrow();
  localStorage.setItem("age", "kind");
});
if ((localStorage.getItem("age") == "kind")) {
  setTimeout(function() {
    localStorage.setItem("age", "kind");
  }, 500);
}
jongvolwassene.addEventListener("click", () => {
  selectOption(jongvolwassene, 2);
  checkOption(kind, 1, kindCheck);
  checkOption(volwassene, 3, volwasseneCheck);
  checkOption(senior, 4, seniorCheck);
  checkArrow();
  localStorage.setItem("age", "jongvolwassene");
});
if ((localStorage.getItem("age") == "jongvolwassene")) {
  setTimeout(function() {
    localStorage.setItem("age", "jongvolwassene");
  }, 500);
}
volwassene.addEventListener("click", () => {
  selectOption(volwassene, 3);
  checkOption(kind, 1, kindCheck);
  checkOption(jongvolwassene, 2, jongvolwasseneCheck);
  checkOption(senior, 4, seniorCheck);
  checkArrow();
  localStorage.setItem("age", "volwassene");
});
if ((localStorage.getItem("age") == "volwassene")) {
  setTimeout(function() {
    localStorage.setItem("age", "volwassene");
  }, 500);
}
senior.addEventListener("click", () => {
  selectOption(senior, 4);
  checkOption(kind, 1, kindCheck);
  checkOption(jongvolwassene, 2, jongvolwasseneCheck);
  checkOption(volwassene, 3, volwasseneCheck);
  checkArrow();
  localStorage.setItem("age", "senior");
});
if ((localStorage.getItem("age") == "senior")) {
  setTimeout(function() {
    localStorage.setItem("age", "senior");
  }, 500);
}

localStorage.setItem("gender", "none");
localStorage.setItem("age", "none");

// Testing stuff
setInterval(function() {
}, 3000);

let testA = 0;
let testB = 0;
function test(aValue, bValue) {
  testA = aValue;
  testB = bValue;
  console.log(testA);
  console.log(testB);
} 
// test(1, 0);
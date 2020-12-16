let arr = ["avatar", "star wars", "the avengers", "harry potter"]
let emtyArr = [];

console.log(emtyArr.length)

const nextButton = document.getElementById("nextButton")

nextButton.addEventListener("click", () => {
    if (emtyArr.length != 0) {
        window.location.assign("pageTwo.html");
    }
});


if (emtyArr.length == 0) {
    console.log("hij noteerd de nule")
}
else console.log("hij is niet gelijk aan nule")

localStorage.setItem('name', 'yi')
console.log(localStorage.getItem('name'))

localStorage.setItem('arr', JSON.stringify(arr));

console.log(localStorage)

const retrieveArray = localStorage.getItem("arr");

let normallArray = JSON.parse(retrieveArray);

console.log(normallArray)

const index = arr.indexOf("harry potter");
if (index > -1) {
    arr.splice(index, 1)
}

console.log(arr)


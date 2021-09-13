console.log("main.js Loaded");
const body = document.querySelector("body");

let newHeading = document.createElement("h1");
newHeading.innerHTML = "New Heading";
newHeading.style.color = "teal";
console.log(newHeading);


document.querySelector(".jumbotron").append(newHeading);
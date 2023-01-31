"use strict";

// let yearDropdownElement = document.querySelector("#year-of-make");
// yearDropdownElement.addEventListener("change", function (e) {
//   e.preventDefault();
//   console.log(yearDropdownElement.value);
// });

// making a pop up that displays the car parts when submit is clicked

const btn = document.querySelector(".btn");
const partsOverlay = document.querySelector("#partsOverlay");
const output = document.querySelector("#output");
const exit = document.querySelector("#exitPartdisplay");

btn.addEventListener("click", function () {
  partsOverlay.classList.remove("hidden");
  output.classList.remove("hidden");
});

// how to exit the parts set-up display:

const exitBox = function () {
  partsOverlay.classList.add("hidden");
  output.classList.add("hidden");
};

partsOverlay.addEventListener("click", function () {
  exitBox();
});

exit.addEventListener("click", function () {
  exitBox();
});

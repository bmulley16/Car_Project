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

btn.addEventListener("click", function () {
  partsOverlay.classList.remove("hidden");
  output.classList.remove("hidden");
});

partsOverlay.addEventListener("click", function () {
  partsOverlay.classList.add("hidden");
  output.classList.add("hidden");
});

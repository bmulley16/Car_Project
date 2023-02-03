"use strict";

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("dom has been loaded");
// });

// making a pop up that displays the car parts when submit is clicked

const btn = document.querySelector(".btn");
const partsOverlay = document.querySelector("#partsOverlay");
const output = document.querySelector("#output");
const exit = document.querySelector("#exitPartDisplay");
const yearOfMake = document.querySelector("#year-of-make");
const makeDropdown = document.querySelector("#Make");
const makes = ["Mazda", "Dodge", "Chevrolet"];
const year = [1999, 2008, 1984];
const category = ["Belt Drive", "Accessories"];
const carModels = {
  mazda: ["Speed 3"],
  dodge: ["Ram 2500"],
  chevrolet: ["K1500"],
};

// populating loops

// loop for the make:

for (let i = 0; i < makes.length; i++) {
  let make = makes[i];
  let el = document.createElement("option");
  el.textContent = make;
  el.value = make;
  makeDropdown.appendChild(el);
}
// });

// loop for the model:

makeDropdown.addEventListener("change", function (e) {
  const makeSelected = e.target.value.toLocaleLowerCase();
  if (makeSelected === "mazda") {
    for (let i = 0; i < carModels.mazda.length; i++) {
      let model = carModels.mazda[i];
      let el = document.createElement("option");
      el.value = model;
      el.textContent = model;
      document.querySelector("#Model").appendChild(el);
    }
  } else if (makeSelected === "dodge") {
    console.log("it worked");

    for (let i = 0; i < carModels.dodge.length; i++) {
      let model = carModels.dodge[i];
      let el = document.createElement("option");
      el.value = model;
      el.textContent = model;
      document.querySelector("#Model").appendChild(el);
    }
  } else if (makeSelected === "chevrolet") {
    for (let i = 0; i < carModels.chevrolet.length; i++) {
      let model = carModels.chevrolet[i];
      let el = document.createElement("option");
      el.value = model;
      el.textContent = model;
      document.querySelector("#Model").appendChild(el);
    }
  }
});

// have event listener that listens to the changes current option of the make dropdown
makeDropdown.addEventListener("change", function (e) {
  console.log(e.target.value);
});
btn.addEventListener("click", function () {
  partsOverlay.classList.remove("hidden");
  output.classList.remove("hidden");
});

// how to exit the parts set-up display:

const exitBox = function () {
  partsOverlay.classList.add("hidden");
  output.classList.add("hidden");
};

exit.addEventListener("click", function () {
  exitBox();
});

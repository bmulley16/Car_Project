"use strict";

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("dom has been loaded");
// });

// making a pop up that displays the car parts when submit is clicked

const categoryDropdown = document.querySelector("#Category");
const btn = document.querySelector(".btn");
const partsOverlay = document.querySelector("#partsOverlay");
const output = document.querySelector("#output");
const exit = document.querySelector("#exitPartDisplay");
const yearDropdown = document.querySelector("#year-of-make");
const makeDropdown = document.querySelector("#Make");
const partsDropDown = document.querySelector("#Part");
const years = ["1999", "2008", "1984"];
const partCategories = ["Belt Drive", "Accessories"];
const modelDropDopwn = document.querySelector("#Model");
const vehicleSetUp = {
  Dodge: {
    model: "Ram 2500",
    "Ram 2500": {
      "Belt Drive": {
        Belts: [
          {
            brand: "ROADMAX",
            price: 13.98,
            partNumber: "8K810AP",
          },

          {
            brand: "FVP",
            price: 16.03,
            partNumber: "810K8",
          },
        ],

        "Belt Tensioner": [
          {
            brand: "SKP ",
            price: 44.47,
            partNumber: " SK89219",
          },

          {
            brand: "ULTRA-POWER",
            price: 59.39,
            partNumber: "38157 ",
          },
        ],
      },

      Accessories: {
        "Cab Protector": [
          {
            brand: "ARIES",
            price: 251.38,
            partNumber: "111000",
          },
        ],

        "Hoop Step": [
          {
            brand: "Carr",
            price: 56.48,
            partNumber: "103991",
          },

          {
            brand: "Carr",
            price: 56.48,
            partNumber: "114032",
          },
        ],
      },
    },
  },
  Chevrolet: {
    model: "K1500",
    K1500: {
      "Belt Drive": {
        Belts: [
          {
            brand: "ROADMAX",
            price: 1.23,
            partNumber: "15405AP ",
          },

          {
            brand: "ROADMAX",
            price: 2.44,
            partNumber: " 15340AP",
          },
        ],

        "Belt Tensioner": [
          {
            brand: "ULTRA-POWER",
            price: 40.67,
            partNumber: "38357",
          },

          {
            brand: "GATES",
            price: 44.47,
            partNumber: " 38408",
          },
        ],
      },

      Accessories: {
        "Cab Protector": [
          {
            brand: "DEE ZEE",
            price: 707.3,
            partNumber: "DZ95050RB ",
          },

          {
            brand: "DEE ZEE ",
            price: 458.42,
            partNumber: "DZ95054R ",
          },
        ],

        "Hoop Step": [
          {
            brand: "CARR",
            price: 113.64,
            partNumber: "103991",
          },
          {
            brand: " CARR",
            price: 245.7,
            partNumber: "114031",
          },
        ],
      },
    },
  },

  Mazda: {
    model: "Speed 3",
    "Speed 3": {
      "Belt Drive": {
        Belts: [
          {
            brand: "CADNA",
            price: 9.67,
            partNumber: "520K6",
          },

          {
            brand: "FVP",
            price: 13.96,
            partNumber: "910K6",
          },
        ],

        "Belt Tensioner": [
          {
            brand: "ULTRA-POWER",
            price: 26.42,
            partNumber: "38408",
          },

          {
            brand: "SKP",
            price: 29.55,
            partNumber: "SK89372",
          },
        ],
      },

      Accessories: {
        "Side Window Vent": [
          {
            brand: "WESTIN",
            price: 67.51,
            partNumber: "7257486 ",
          },
        ],

        "Trailer Hitch": [
          {
            brand: "DRAW-TITE",
            price: 217.56,
            partNumber: "24816",
          },
        ],
      },
    },
  },
};

console.log(Object.keys(vehicleSetUp["Dodge"]["Ram 2500"]));

// year population:
const make = Object.keys(vehicleSetUp);

yearDropdown.addEventListener("click", function () {
  for (let i = 0; i < years.length; i++) {
    let result = years[i];
    let el = document.createElement("option");
    el.value = result;
    el.textContent = result;
    yearDropdown.appendChild(el);
  }
});

// });
//the make:
yearDropdown.addEventListener("change", function () {
  for (let i = 0; i < make.length; i++) {
    let result = make[i];
    let el = document.createElement("option");
    el.value = result;
    el.textContent = result;
    makeDropdown.appendChild(el);
  }
});

console.log(yearDropdown.value);

makeDropdown.addEventListener("change", function (e) {
  let makeSelected = e.target.value;
  let carModel = vehicleSetUp[makeSelected]["model"];
  let el = document.createElement("option");
  el.value = carModel;
  el.textContent = carModel;
  modelDropDopwn.appendChild(el);
});

// category population
modelDropDopwn.addEventListener("change", function (e) {
  for (let i = 0; i < partCategories.length; i++) {
    let categoryItem = partCategories[i];
    let el = document.createElement("option");
    el.value = categoryItem;
    el.textContent = categoryItem;
    categoryDropdown.appendChild(el);
  }
});

// parts population vehicle specific:
categoryDropdown.addEventListener("change", function (e) {
  console.log("modelDropDopwn.value", modelDropDopwn.value);
  const modelSelected = modelDropDopwn.value;
  const categorySelected = e.target.value;
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

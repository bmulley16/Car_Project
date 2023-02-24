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
            Brand: "ROADMAX",
            Price: 13.98,
            "Part Number": "8K810AP",
          },

          {
            Brand: "FVP",
            Price: 16.03,
            "Part Number": "810K8",
          },
        ],

        "Belt Tensioner": [
          {
            Brand: "SKP ",
            Price: 44.47,
            "Part Number": " SK89219",
          },

          {
            Brand: "ULTRA-POWER",
            Price: 59.39,
            "Part Number": "38157 ",
          },
        ],
      },

      Accessories: {
        "Cab Protector": [
          {
            Brand: "ARIES",
            Price: 251.38,
            "Part Number": "111000",
          },
        ],

        "Hoop Step": [
          {
            Brand: "Carr",
            Price: 56.48,
            "Part Number": "103991",
          },

          {
            Brand: "Carr",
            Price: 56.48,
            "Part Number": "114032",
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
            Brand: "ROADMAX",
            Price: 1.23,
            "Part Number": "15405AP ",
          },

          {
            Brand: "ROADMAX",
            Price: 2.44,
            "Part Number": " 15340AP",
          },
        ],

        "Belt Tensioner": [
          {
            Brand: "ULTRA-POWER",
            Price: 40.67,
            "Part Number": "38357",
          },

          {
            Brand: "GATES",
            Price: 44.47,
            "Part Number": " 38408",
          },
        ],
      },

      Accessories: {
        "Cab Protector": [
          {
            Brand: "DEE ZEE",
            Price: 707.3,
            "Part Number": "DZ95050RB ",
          },

          {
            Brand: "DEE ZEE ",
            Price: 458.42,
            "Part Number": "DZ95054R ",
          },
        ],

        "Hoop Step": [
          {
            Brand: "CARR",
            Price: 113.64,
            "Part Number": "103991",
          },
          {
            Brand: " CARR",
            Price: 245.7,
            "Part Number": "114031",
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
            Brand: "CADNA",
            Price: 9.67,
            "Part Number": "520K6",
          },

          {
            Brand: "FVP",
            Price: 13.96,
            "Part Number": "910K6",
          },
        ],

        "Belt Tensioner": [
          {
            Brand: "ULTRA-POWER",
            Price: 26.42,
            "Part Number": "38408",
          },

          {
            Brand: "SKP",
            Price: 29.55,
            "Part Number": "SK89372",
          },
        ],
      },

      Accessories: {
        "Side Window Vent": [
          {
            Brand: "WESTIN",
            Price: 67.51,
            "Part Number": "7257486 ",
          },
        ],

        "Trailer Hitch": [
          {
            Brand: "DRAW-TITE",
            Price: 217.56,
            "Part Number": "24816",
          },
        ],
      },
    },
  },
};

// clearing option dropdowns:

function removeOptions(selectElement) {
  var i,
    L = selectElement.options.length - 1;
  for (i = L; i >= 0; i--) {
    selectElement.remove(i);
  }
}

// year population:
const make = Object.keys(vehicleSetUp);
yearDropdown.addEventListener("click", function () {
  removeOptions(yearDropdown);
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
  removeOptions(makeDropdown);
  for (let i = 0; i < make.length; i++) {
    let result = make[i];
    let el = document.createElement("option");
    el.value = result;
    el.textContent = result;
    makeDropdown.appendChild(el);
  }
});

makeDropdown.addEventListener("change", function (e) {
  removeOptions(modelDropDopwn);
  let makeSelected = e.target.value;
  let carModel = vehicleSetUp[makeSelected]["model"];
  let el = document.createElement("option");
  el.value = carModel;
  el.textContent = carModel;
  modelDropDopwn.appendChild(el);
});

// category population
modelDropDopwn.addEventListener("click", function (e) {
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
  removeOptions(partsDropDown);
  const modelSelected = modelDropDopwn.value;
  const makeSelected = makeDropdown.value;
  const categorySelected = e.target.value;
  const keys = Object.keys(
    vehicleSetUp[makeSelected][modelSelected][categorySelected]
  );
  for (const part of keys) {
    let el = document.createElement("option");
    el.value = part;
    el.textContent = part;
    partsDropDown.appendChild(el);
  }
});

// the parts output given prvious selection:
btn.addEventListener("click", function () {
  // populating the header
  const h3 = document.createElement("h3");
  h3.textContent = partsDropDown.value;
  h3.setAttribute("id", "part-name");
  const autoContainer = document.getElementById("auto-container");
  autoContainer.appendChild(h3);

  // populating the boxes:

  partsOverlay.classList.remove("hidden");
  output.classList.remove("hidden");
  const objectValues =
    vehicleSetUp[makeDropdown.value][modelDropDopwn.value][
      categoryDropdown.value
    ][partsDropDown.value];

  console.log(Object.keys(objectValues[0]));
  console.log(Object.values(objectValues[0]));

  for (let i = 0; i < objectValues.length; i++) {
    const keys = Object.keys(objectValues[i]);
    const values = Object.values(objectValues[i]);
    const ul = document.createElement("ul");
    ul.setAttribute("id", `part-${i + 1}`);
    autoContainer.appendChild(ul);
    for (let j = 0; j < keys.length; j++) {
      const li = document.createElement("li");
      li.textContent = `${keys[j]}:" "${values[j]}`;
      const obtainUl = document.getElementById(`part-${i + 1}`);
      obtainUl.appendChild(li);
    }
  }
});

// how to exit the parts set-up display:

const exitBox = function () {
  partsOverlay.classList.add("hidden");
  output.classList.add("hidden");
};

exit.addEventListener("click", function () {
  exitBox();
});

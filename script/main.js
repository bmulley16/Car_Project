"use strict";
const yearOptions = document.querySelector("#year-options");
const yearOptionsContainer = document.querySelector("#year-options-container");
const btn = document.querySelector(".btn");
const years = ["1999", "2008", "1984"];
const yearContainer = document.querySelector("#year-container");
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

// functions:

// new drop downs:

// populating the year dropdown:
yearContainer.addEventListener("click", () => {
  console.log(yearOptionsContainer.childElementCount);
  // while (yearOptionsContainer.hasChildNodes) {
  //   yearOptionsContainer.removeChild(yearOptionsContainer.firstChild);
  // }
  for (const year of years) {
    const optionContainer = document.createElement("div");
    optionContainer.classList.add("option");
    yearOptionsContainer.appendChild(optionContainer);
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.className = "radio";
    input.id = year;
    input.name = year;
    input.value = year;
    label.htmlFor = year;
    label.innerHTML = year;
    optionContainer.appendChild(input);
    optionContainer.appendChild(label);
  }
});
const returnValue = function () {
  if (document.getElementsByClassName("option").checked) {
    const valuedReturned = document.getElementById("1984").value;
    return valuedReturned;
  }
};

console.log(returnValue());

const selectedAll = document.querySelectorAll(".selected");

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;

  const optionsList = optionsContainer.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    if (optionsContainer.classList.contains("active")) {
      optionsContainer.classList.remove("active");
    } else {
      let currentActive = document.querySelector("options-container.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }
      optionsContainer.classList.add("active");
    }
  });

  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
});
// // functions

// const createDefaultOption = function (textContent, dropDown) {
//   const defaultOption = document.createElement("option");
//   defaultOption.textContent = textContent;
//   dropDown.appendChild(defaultOption);
// };

// // year population:
// const populateYearDropDown = function () {
//   yearDropdown.innerHTML = " ";

//   createDefaultOption("Choose Year", yearDropdown);

//   for (let i = 0; i < years.length; i++) {
//     let result = years[i];
//     let el = document.createElement("option");
//     el.value = result;
//     el.textContent = result;
//     yearDropdown.appendChild(el);
//   }
// };

// populateYearDropDown();

// // });
// //the make:
// const make = Object.keys(vehicleSetUp);
// yearDropdown.addEventListener("change", function () {
//   makeDropdown.innerHTML = "";
//   createDefaultOption("Choose Make", makeDropdown);

//   for (let i = 0; i < make.length; i++) {
//     let result = make[i];
//     let el = document.createElement("option");
//     el.value = result;
//     el.textContent = result;
//     makeDropdown.appendChild(el);
//   }
// });

// makeDropdown.addEventListener("change", function (e) {
//   modelDropDopwn.innerHTML = "";

//   createDefaultOption("Choose model", modelDropDopwn);

//   let makeSelected = e.target.value;
//   let carModel = vehicleSetUp[makeSelected]["model"];
//   let el = document.createElement("option");
//   el.value = carModel;
//   el.textContent = carModel;
//   modelDropDopwn.appendChild(el);
// });

// // category population
// modelDropDopwn.addEventListener("change", function (e) {
//   categoryDropdown.innerHTML = "";
//   createDefaultOption("Choose Category", categoryDropdown);

//   for (let i = 0; i < partCategories.length; i++) {
//     let categoryItem = partCategories[i];
//     let el = document.createElement("option");
//     el.value = categoryItem;
//     el.textContent = categoryItem;
//     categoryDropdown.appendChild(el);
//   }
// });

// // parts population vehicle specific:
// categoryDropdown.addEventListener("change", function (e) {
//   partsDropDown.innerHTML = "";
//   createDefaultOption("Choose Part", partsDropDown);

//   const modelSelected = modelDropDopwn.value;
//   const makeSelected = makeDropdown.value;
//   const categorySelected = e.target.value;
//   const keys = Object.keys(
//     vehicleSetUp[makeSelected][modelSelected][categorySelected]
//   );
//   for (const part of keys) {
//     let el = document.createElement("option");
//     el.value = part;
//     el.textContent = part;
//     partsDropDown.appendChild(el);
//   }
// });

// // attempt 2 at populating the parts output:

// // the parts output given prvious selection:
// btn.addEventListener("click", function () {
//   // populating the header
//   const h3 = document.createElement("h3");
//   h3.textContent = partsDropDown.value;
//   h3.setAttribute("id", "part-name");
//   const autoContainer = document.getElementById("auto-container");
//   autoContainer.innerHTML = " ";
//   autoContainer.appendChild(h3);

//   // populating the boxes:
//   output.classList.remove("hidden");
//   autoContainer.classList.remove("hidden");
//   const objectValues =
//     vehicleSetUp[makeDropdown.value][modelDropDopwn.value][
//       categoryDropdown.value
//     ][partsDropDown.value];

//   console.log(objectValues);
//   console.log(Object.values(objectValues[0]));

//   for (let i = 0; i < objectValues.length; i++) {
//     const keys = Object.keys(objectValues[i]);
//     const values = Object.values(objectValues[i]);
//     const ul = document.createElement("ul");
//     ul.setAttribute("id", `part-${i + 1}`);
//     autoContainer.appendChild(ul);
//     for (let j = 0; j < keys.length; j++) {
//       const li = document.createElement("li");
//       li.textContent = `${keys[j]}: ${values[j]}`;
//       const obtainUl = document.getElementById(`part-${i + 1}`);
//       obtainUl.appendChild(li);
//     }
//   }
// });

// // how to exit the parts set-up display:

// const exitBox = function () {
//   output.classList.add("hidden");
//   const autoContainer = document.getElementById("auto-container");
//   autoContainer.innerHTML = " ";
// };

// exit.addEventListener("click", function () {
//   exitBox();
// });

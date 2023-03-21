"use strict";
const categoryDropdown = document.querySelector("#category-container");
const category = document.querySelector("#category-options-container");
const makeSelectedDiv = document.querySelector("#make-selected");
const modelSelectedDiv = document.querySelector("#model-selected");
const categorySelectedDiv = document.querySelector("#category-selected");
const partSelectedDiv = document.querySelector("#part-selected");
const selectedAll = document.querySelectorAll(".selected");
const yearOptionsContainer = document.querySelector("#year-options-container");
const btn = document.querySelector(".btn");
const years = ["1999", "2008", "1984"];
const yearContainer = document.querySelector("#year-container");
const makes = document.querySelector("#makes");
const model = document.querySelector("#models");
const makeDropdown = document.querySelector("#make-container");
const selected = document.querySelector(".selected");
const partsDropDown = document.querySelector("#parts-container");
const part = document.querySelector("#parts-options-container");
const vehicleSetUp = {
  Dodge: {
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

// new drop downs:
const optionFunction = function () {
  const changeSelected = selectedAll.forEach((selected) => {
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

    const optionClickEvent = optionsList.forEach((o) => {
      o.addEventListener("click", () => {
        console.log("year click worked");
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
      });
    });
  });
};
// populating the year dropdown:
yearContainer.addEventListener("click", () => {
  yearOptionsContainer.innerHTML = "";

  for (const year of years) {
    const optionContainer = document.createElement("div");
    optionContainer.classList.add("option");
    yearOptionsContainer.appendChild(optionContainer);
    const createForm = document.createElement("form");
    createForm.action = "#";
    optionContainer.appendChild(createForm);
    const input = document.createElement("input");
    input.type = "radio";
    input.className = "radio";
    input.id = `s+${year}`;
    input.name = "year";
    input.value = year;
    const label = document.createElement("label");
    label.htmlFor = `s+${year}`;
    label.innerHTML = year;
    createForm.appendChild(input);
    createForm.appendChild(label);
  }
  optionFunction();
});

// make dropdown:
const vehicleMakes = Object.keys(vehicleSetUp);
makeDropdown.addEventListener("click", () => {
  makes.innerHTML = " ";
  model.innerHTML = " ";
  category.innerHTML = " ";
  part.innerHTML = " ";
  modelSelectedDiv.innerHTML = " please select Model";
  categorySelectedDiv.innerHTML = "please select parts category";
  partSelectedDiv.innerHTML = "please select part";

  for (const specificMake of vehicleMakes) {
    const optionContainer = document.createElement("div");
    optionContainer.classList.add("option");
    makes.appendChild(optionContainer);
    const input = document.createElement("input");
    input.type = "radio";
    input.className = "radio";
    input.id = specificMake;
    input.name = "Make";
    input.value = specificMake;
    const label = document.createElement("label");
    label.htmlFor = specificMake;
    label.innerHTML = specificMake;
    optionContainer.appendChild(input);
    optionContainer.appendChild(label);
  }
  optionFunction();
});

// model dropdown

const modelDropDopwn = document.querySelector("#model-container");
modelDropDopwn.addEventListener("click", () => {
  const selectedMake = makeSelectedDiv.innerHTML;
  model.innerHTML = " ";
  category.innerHTML = " ";
  part.innerHTML = " ";
  categorySelectedDiv.innerHTML = "please select parts category";
  partSelectedDiv.innerHTML = "please select part";
  const modelkeys = Object.keys(vehicleSetUp[selectedMake]);

  for (const selectedModel of modelkeys) {
    const optionContainer = document.createElement("div");
    optionContainer.classList.add("option");
    model.appendChild(optionContainer);
    const input = document.createElement("input");
    input.type = "radio";
    input.className = "radio";
    input.id = selectedModel;
    input.name = "Model";
    input.value = selectedModel;
    const label = document.createElement("label");
    label.htmlFor = selectedModel;
    label.innerHTML = selectedModel;
    optionContainer.appendChild(input);
    optionContainer.appendChild(label);
  }
  optionFunction();
});

// category dropdown

categoryDropdown.addEventListener("click", () => {
  category.innerHTML = " ";
  category.innerHTML = " ";
  part.innerHTML = " ";
  partSelectedDiv.innerHTML = "please select part";
  const selectedMake = makeSelectedDiv.innerHTML;
  const selectedModel = modelSelectedDiv.innerHTML;
  const categoryKeys = Object.keys(vehicleSetUp[selectedMake][selectedModel]);

  for (const selectedCategory of categoryKeys) {
    const optionContainer = document.createElement("div");
    optionContainer.classList.add("option");
    category.appendChild(optionContainer);
    const input = document.createElement("input");
    input.type = "radio";
    input.className = "radio";
    input.id = selectedCategory;
    input.name = "category";
    input.value = selectedCategory;
    const label = document.createElement("label");
    label.htmlFor = selectedCategory;
    label.innerHTML = selectedCategory;
    optionContainer.appendChild(input);
    optionContainer.appendChild(label);
  }
  optionFunction();
});

// Parts Dropdown:

partsDropDown.addEventListener("click", () => {
  part.innerHTML = " ";
  const selectedMake = makeSelectedDiv.innerHTML;
  const selectedModel = modelSelectedDiv.innerHTML;
  const categorySelected = categorySelectedDiv.innerHTML;
  const partsKeys = Object.keys(
    vehicleSetUp[selectedMake][selectedModel][categorySelected]
  );
  console.log(partsKeys);

  for (const selectedParts of partsKeys) {
    const optionContainer = document.createElement("div");
    optionContainer.classList.add("option");
    part.appendChild(optionContainer);
    const input = document.createElement("input");
    input.type = "radio";
    input.className = "radio";
    input.id = selectedParts;
    input.name = "parts";
    input.value = selectedParts;
    const label = document.createElement("label");
    label.htmlFor = selectedParts;
    label.innerHTML = selectedParts;
    optionContainer.appendChild(input);
    optionContainer.appendChild(label);
  }
  optionFunction();
});

// attempt 2 at populating the parts output:

// the parts output given prvious selection:
btn.addEventListener("click", function () {
  // populating the header
  const h3 = document.createElement("h3");
  h3.textContent = partSelectedDiv.innerHTML;
  h3.classList.add("part-name");
  const autoContainer = document.getElementById("auto-container");
  autoContainer.innerHTML = " ";
  autoContainer.appendChild(h3);

  // populating the boxes:
  const selectedMake = makeSelectedDiv.innerHTML;
  const selectedModel = modelSelectedDiv.innerHTML;
  const categorySelected = categorySelectedDiv.innerHTML;
  const partSelected = partSelectedDiv.innerHTML;
  output.classList.remove("hidden");
  autoContainer.classList.remove("hidden");
  const objectValues =
    vehicleSetUp[selectedMake][selectedModel][categorySelected][partSelected];

  console.log(objectValues);
  console.log(Object.values(objectValues[0]));

  for (let i = 0; i < objectValues.length; i++) {
    const keys = Object.keys(objectValues[i]);
    const values = Object.values(objectValues[i]);
    const ul = document.createElement("ul");
    ul.setAttribute("id", `part-${i + 1}`);
    autoContainer.appendChild(ul);
    for (let j = 0; j < keys.length; j++) {
      const li = document.createElement("li");
      li.textContent = `${keys[j]}: ${values[j]}`;
      const obtainUl = document.getElementById(`part-${i + 1}`);
      obtainUl.appendChild(li);
    }
  }
});

// how to exit the parts set-up display:

// const exitBox = function () {
//   output.classList.add("hidden");
//   const autoContainer = document.getElementById("auto-container");
//   autoContainer.innerHTML = " ";
// };

// exit.addEventListener("click", function () {
//   exitBox();
// });

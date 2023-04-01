"use strict";
const categoryDropdown = document.querySelector("#category-container");
const category = document.querySelector("#category-options-container");
const categoryOptionsContainer = document.querySelector(
  ".categoryOptionsContainer"
);
const makeSelectedDiv = document.querySelector("#make-selected");
const modelSelectedDiv = document.querySelector("#model-selected");
const categorySelectedDiv = document.querySelector("#category-selected");
const partSelectedDiv = document.querySelector("#part-selected");
const selectedAll = document.querySelectorAll(".selected");
const yearOptionsContainer = document.querySelector("#year-options-container");
const btn = document.querySelector(".btn");
const years = ["1999", "2008", "1984"];
const selectedYear = document.querySelector("#year-selected");
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

const dropDownFunction = (selectbox, inputAndLabelConfig, nameconfig) => {
  const optionContainer = document.createElement("div");
  optionContainer.classList.add("option");
  selectbox.appendChild(optionContainer);
  const input = document.createElement("input");
  input.type = "radio";
  input.className = "radio";
  input.id = inputAndLabelConfig;
  input.name = nameconfig;
  input.value = inputAndLabelConfig;
  const label = document.createElement("label");
  label.htmlFor = inputAndLabelConfig;
  label.innerHTML = inputAndLabelConfig;
  optionContainer.appendChild(input);
  optionContainer.appendChild(label);
};
const dropdownOptionsArray = [
  {
    container: makes,
    label: makeSelectedDiv,
    labelText: "Please select the make:",
  },

  {
    container: model,
    label: modelSelectedDiv,
    labelText: "Please select the model of the vehicle:",
  },

  {
    container: category,
    label: categorySelectedDiv,
    labelText: "Please select the category:",
  },

  {
    container: part,
    label: partSelectedDiv,
    labelText: "Please select the desired part:",
  },
];

const resetDropDownValues = (dropdownOptions) => {
  dropdownOptions.forEach((value) => {
    const container = value.container;
    container.innerHTML = "";
    const labelSelector = value.label;
    labelSelector.innerHTML = value.labelText;
  });
};
// populating the year dropdown:
yearContainer.addEventListener("click", () => {
  yearOptionsContainer.innerHTML = "";
  resetDropDownValues([
    {
      container: makes,
      label: makeSelectedDiv,
      labelText: "Please select the make:",
    },

    {
      container: model,
      label: modelSelectedDiv,
      labelText: "Please select the model of the vehicle:",
    },

    {
      container: category,
      label: categorySelectedDiv,
      labelText: "Please select the category:",
    },

    {
      container: part,
      label: partSelectedDiv,
      labelText: "Please select the desired part:",
    },
  ]);

  for (const year of years) {
    dropDownFunction(yearOptionsContainer, year, "year-of-vehicle");
  }
  optionFunction();
});

// make dropdown:
const vehicleMakes = Object.keys(vehicleSetUp);
makeDropdown.addEventListener("click", () => {
  makes.innerHTML = " ";

  resetDropDownValues([
    {
      container: model,
      label: modelSelectedDiv,
      labelText: "Please select the model of the vehicle:",
    },

    {
      container: category,
      label: categorySelectedDiv,
      labelText: "Please select the category:",
    },

    {
      container: part,
      label: partSelectedDiv,
      labelText: "Please select the desired part:",
    },
  ]);

  for (const specificMake of vehicleMakes) {
    dropDownFunction(makes, specificMake, "Make");
  }
  optionFunction();
});

// model dropdown

const modelDropDopwn = document.querySelector("#model-container");
modelDropDopwn.addEventListener("click", () => {
  model.innerHTML = " ";
  resetDropDownValues([
    {
      container: category,
      label: categorySelectedDiv,
      labelText: "Please select the category:",
    },

    {
      container: part,
      label: partSelectedDiv,
      labelText: "Please select the desired part:",
    },
  ]);

  const selectedMake = makeSelectedDiv.innerHTML;
  const modelkeys = Object.keys(vehicleSetUp[selectedMake]);

  for (const selectedModel of modelkeys) {
    dropDownFunction(model, selectedModel, "Model");
  }
  optionFunction();
});

// category dropdown

categoryDropdown.addEventListener("click", () => {
  category.innerHTML = " ";
  resetDropDownValues([
    {
      container: part,
      label: partSelectedDiv,
      labelText: "Please select the desired part:",
    },
  ]);
  const selectedMake = makeSelectedDiv.innerHTML;
  const selectedModel = modelSelectedDiv.innerHTML;
  const categoryKeys = Object.keys(vehicleSetUp[selectedMake][selectedModel]);

  for (const selectedCategory of categoryKeys) {
    dropDownFunction(category, selectedCategory, "category");
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

  for (const selectedParts of partsKeys) {
    dropDownFunction(part, selectedParts, "parts");
  }
  optionFunction();
});

// attempt 2 at populating the parts output:

// the parts output given prvious selection:
btn.addEventListener("click", function () {
  const yearOutput = selectedYear.innerHTML;
  const selectedMake = makeSelectedDiv.innerHTML;
  const selectedModel = modelSelectedDiv.innerHTML;
  const categorySelected = categorySelectedDiv.innerHTML;
  const partSelected = partSelectedDiv.innerHTML;
  // populating the header
  console.log("selectedMake", selectedMake);
  // form validation:

  // avoid the hard code and use the variables above instead:

  let yearAlert = "Please select the year of the vehicle:";
  let makeAlert = dropdownOptionsArray[0].labelText;
  let modelAlert = dropdownOptionsArray[1].labelText;
  let categoryAlert = dropdownOptionsArray[2].labelText;
  let partAlert = dropdownOptionsArray[3].labelText;

  if (yearOutput == yearAlert) {
    alert("Please complete the form ");
    return;
  } else if (selectedMake == makeAlert) {
    alert("Please complete the form");
    return;
  } else if (selectedModel == modelAlert) {
    alert("Please complete the form");
    return;
  } else if (categorySelected == categoryAlert) {
    alert("PLease complete the form");
    return;
  } else if (partSelected == partAlert) {
    alert("Please complete the form");
    return;
  }

  const h3 = document.createElement("h3");
  h3.textContent = partSelectedDiv.innerHTML;
  h3.classList.add("part-name");
  const autoContainer = document.getElementById("auto-container");
  autoContainer.innerHTML = " ";
  autoContainer.appendChild(h3);

  // populating the boxes:

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

const exitBox = function () {
  output.classList.add("hidden");
  const autoContainer = document.getElementById("auto-container");
  autoContainer.innerHTML = " ";
};

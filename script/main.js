"use strict";

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("dom has been loaded");
// });

// making a pop up that displays the car parts when submit is clicked

const btn = document.querySelector(".btn");
const partsOverlay = document.querySelector("#partsOverlay");
const output = document.querySelector("#output");
const exit = document.querySelector("#exitPartDisplay");
const yearDropdown = document.querySelector("#year-of-make");
const makeDropdown = document.querySelector("#Make");
const partsDropDown = document.querySelector("#Part");
const makes = ["Mazda", "Dodge", "Chevrolet"];
const years = ["1999", "2008", "1984"];
const carModels = {
  mazda: ["Speed 3"],
  dodge: ["Ram 2500"],
  chevrolet: ["K1500"],
};
// const populatingArray = [makes, years, carModels];

const vehicleSetUp = {
  dodge: {
    Ram2500: {
      beltDrive: {
        belt: {
          belt1: {
            brand: "ROADMAX",
            price: 13.98,
            partNumber: "8K810AP",
          },

          belt2: {
            brand: "FVP",
            price: 16.03,
            partNumber: "810K8",
          },
        },

        beltTensioner: {
          beltTensioner1: {
            brand: "SKP ",
            price: 44.47,
            partNumber: " SK89219",
          },

          beltTensioner2: {
            brand: "ULTRA-POWER",
            price: 59.39,
            partNumber: "38157 ",
          },
        },
      },

      accessories: {
        cabProtector: {
          cabProtector1: {
            brand: "ARIES",
            price: 251.38,
            partNumber: "111000",
          },
        },

        hoopStep: {
          hoopStep1: {
            brand: "Carr",
            price: 56.48,
            partNumber: "103991",
          },

          hoopStep2: {
            brand: "Carr",
            price: 56.48,
            partNumber: "114032",
          },
        },
      },
    },
  },
  chevrolet: {
    K1500: {
      beltDrive: {
        belt: {
          belt1: {
            brand: "ROADMAX",
            price: 1.23,
            partNumber: "15405AP ",
          },

          belt2: {
            brand: "ROADMAX",
            price: 2.44,
            partNumber: " 15340AP",
          },
        },

        beltTensioner: {
          beltTensioner1: {
            brand: "ULTRA-POWER",
            price: 40.67,
            partNumber: "38357",
          },

          beltTensioner2: {
            brand: "GATES",
            price: 44.47,
            partNumber: " 38408",
          },
        },
      },

      accessories: {
        cabProtector: {
          cabProtector1: {
            brand: "DEE ZEE",
            price: 707.3,
            partNumber: "DZ95050RB ",
          },

          cabProtector2: {
            brand: "DEE ZEE ",
            price: 458.42,
            partNumber: "DZ95054R ",
          },
        },

        hoopStep: {
          hoopStep1: {
            brand: "CARR",
            price: 113.64,
            partNumber: "103991",
          },

          hoopStep2: {
            brand: " CARR",
            price: 245.7,
            partNumber: "114031",
          },
        },
      },
    },
  },

  mazda: {
    speed_3: {
      beltDrive: {
        belt: {
          belt1: {
            brand: "CADNA",
            price: 9.67,
            partNumber: "520K6",
          },

          belt2: {
            brand: "FVP",
            price: 13.96,
            partNumber: "910K6",
          },
        },

        beltTensioner: {
          beltTensioner1: {
            brand: "ULTRA-POWER",
            price: 26.42,
            partNumber: "38408",
          },

          beltTensioner2: {
            brand: "SKP",
            price: 29.55,
            partNumber: "SK89372",
          },
        },
      },

      accessories: {
        sideWindowVent: {
          vent1: {
            brand: "WESTIN",
            price: 67.51,
            partNumber: "7257486 ",
          },
        },

        trailerHitch: {
          hitch1: {
            brand: "DRAW-TITE",
            price: 217.56,
            partNumber: "24816",
          },
        },
      },
    },
  },
};

const categoryDropdown = document.querySelector("#Category");

newObj["mazda"];

newObj[makeSelected];

// populating loops function:
let result;
let el;
const populating = function () {
  let el = document.createElement("option");
  el.value = result;
  el.textContent = result;
};

// year population:
yearDropdown.addEventListener("click", function () {
  for (let i = 0; i < years.length; i++) {
    let result = years[i];
    populating();
    yearDropdown.appendChild(el);
  }
});

// });
// loop for the make:

for (let i = 0; i < makes.length; i++) {
  let make = makes[i];
  let el = document.createElement("option");
  el.textContent = make;
  el.value = make;
  makeDropdown.appendChild(el);
}

// loop for the model:

makeDropdown.addEventListener("change", function (e) {
  let makeSelected = e.target.value.toLocaleLowerCase();

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

//

// populating the Category dropdown:

makeDropdown.addEventListener("change", function () {
  for (let i = 0; i < categories.length; i++) {
    let categoryChoice = categories[i];
    let el = document.createElement("option");
    el.value = categoryChoice;
    el.textContent = categoryChoice;
    categoryDropdown.appendChild(el);
  }
});

// populating the parts dropdown:
categoryDropdown.addEventListener("change", function () {
  let makeSelected = makeDropdown.e;
  if (makeSelected === "mazda") {
    console.log("the condition works");
    for (let i = 0; i < mazdaAccessories.length; i++) {
      let partsChoice = mazdaAccessories[i];
      let el = document.createElement("option");
      el.value = partsChoice;
      el.textContent = partsChoice;
      partsDropDown.appendChild(el);
    }
  } else if (makeSelected == "mazda" && categoryChoice == "Beltdrive") {
    for (let i = 0; i < mazdaBeltDrive.length; i++) {
      let partsChoice = mazdaBeltDrive[i];
      let el = document.createElement("option");
      el.value = partsChoice;
      el.textContent = partsChoice;
      partsDropDown.appendChild(el);
    }
  }
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

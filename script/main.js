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
            brand:      
            price:     
            partNumber:
          
          },

            belt2:{
              brand:      
              price:     
              partNumber:
            },
        },

        beltTensioner: {
          beltTensioner1: {
            brand:      
            price:     
            partNumber:
          },

          beltTensioner2: {
            brand:      
            price:     
            partNumber:
          }


        },
      },

      accessories: {
        cabProtector: {
          
          cabProtector1: {
            brand:      
            price:     
            partNumber:
          },

          cabProtector2:{
            brand:      
            price:     
            partNumber:
          }
        },

        hoopStep: {
          
          hoopStep1:{
            brand:      
            price:     
            partNumber:
          },

          hoopStep2: {
            brand:      
            price:     
            partNumber:
          }
        },
      },
    },
  },
  chevrolet: {
    K1500: {
      beltDrive: {
        belt: {
          belt1: { 
            brand:      
            price:     
            partNumber:
          
          },

            belt2:{
              brand:      
              price:     
              partNumber:
            },
        },

        beltTensioner: {
          beltTensioner1: {
            brand:      
            price:     
            partNumber:
          },

          beltTensioner2: {
            brand:      
            price:     
            partNumber:
          }
        },
      },

      accessories: {
        cabProtector: {
          cabProtector1: {
            brand:      
            price:     
            partNumber:
          },

          cabProtector2:{
            brand:      
            price:     
            partNumber:
          }
        },
        
        hoopStep: {
          hoopStep1:{
            brand:      
            price:     
            partNumber:
          },

          hoopStep2: {
            brand:      
            price:     
            partNumber:
          }
        },
      },
    },
  },

  mazda: {
    speed_3: {
      beltDrive: {
        belt: {
          
          belt1: { 
            brand:      
            price:     
            partNumber:
          
          },

            belt2: {
              brand:      
              price:     
              partNumber:
            },
        },

        beltTensioner: {
          beltTensioner1: {
            brand:      
            price:     
            partNumber:
          },

          beltTensioner2: {
            brand:      
            price:     
            partNumber:
          }
        },
      },

      accessories: {
        sideWindowVent: {

          vent1:{
            brand:      
            price:     
            partNumber:
          },

          vent2:{
            brand:      
            price:     
            partNumber:
          }
        },

        trailerHitch: {
         
          hitch1: {
            brand:      
            price:     
            partNumber:

          },

          hitch2: {
            brand:      
            price:     
            partNumber:
          }

          
        },
      },
    },
  },
};

const categoryDropdown = document.querySelector("#Category");
const categories = ["Accessories", "Beltdrive"];
const mazdaAccessories = ["Side Window Vent", "Trailer Hitch"];
const mazdaBeltDrive = ["Serpentine Belt", "Timing Belt"];
// Accessories:

const newObj = {
  mazda: {
    models: ["Speed 3"],
    parts: {
      speed_3: [],
    },
  },
};

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

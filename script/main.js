"use strict";

let yearDropdownElement = document.querySelector(".year-of-make");
yearDropdownElement.addEventListener("change", function (e) {
  e.preventDefault();
  console.log(yearDropdownElement.value);
});

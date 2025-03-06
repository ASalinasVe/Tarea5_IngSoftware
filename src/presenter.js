// const first = document.querySelector("#primer-numero");
// const second = document.querySelector("#segundo-numero");
// const form = document.querySelector("#sumar-form");
// const div = document.querySelector("#resultado-div");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const firstNumber = Number.parseInt(first.value);
//   const secondNumber = Number.parseInt(second.value);

//   div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
// });

import {saludar1,saludar2} from "./saludador.js";

const form1 = document.querySelector("#saludar1-form");
const form2 = document.querySelector("#saludar2-form");


form1.addEventListener("submit", (event) => {
  event.preventDefault();
  saludar1();
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreInput = document.querySelector("#nombre").value.trim();
  if (nombreInput !== "") {
    saludar2(nombreInput);
} else {
    alert("Por favor, ingresa tu nombre.");
}
});


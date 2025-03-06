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

import {saludar1,saludar2,saludar3} from "./saludador.js";

const form1 = document.querySelector("#saludar1-form");
const form2 = document.querySelector("#saludar2-form");
const form3 = document.querySelector("#saludar3-form");

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

form3.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreInput = document.querySelector("#nombre-hora").value.trim();
  if (nombreInput !== "") {
    saludar3(nombreInput);
  } else {
    alert("Por favor, ingresa tu nombre.");
  }
});

import { saludarPorGeneroEdad, saludarEnEspanol, saludarEnIngles } from "./saludador.js";

// Formulario para saludar por género y edad
const formGeneroEdad = document.querySelector("#saludo-genero-edad-form");
formGeneroEdad.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#nombre-genero-edad").value.trim();
  const genero = document.querySelector('input[name="genero"]:checked').value;
  const edad = parseInt(document.querySelector("#edad").value.trim());

  if (nombre !== "" && !isNaN(edad)) {
    saludarPorGeneroEdad(nombre, genero, edad);
  } else {
    alert("Por favor, ingresa todos los datos correctamente.");
  }
});

// Botones para saludar en español o inglés
const espanolButton = document.querySelector("#saludo-espanol");
const inglesButton = document.querySelector("#saludo-ingles");

espanolButton.addEventListener("click", () => {
  const nombre = document.querySelector("#nombre-idioma").value.trim();
  if (nombre !== "") {
    saludarEnEspanol(nombre);
  } else {
    alert("Por favor, ingresa tu nombre.");
  }
});

inglesButton.addEventListener("click", () => {
  const nombre = document.querySelector("#nombre-idioma").value.trim();
  if (nombre !== "") {
    saludarEnIngles(nombre);
  } else {
    alert("Por favor, ingresa tu nombre.");
  }
});



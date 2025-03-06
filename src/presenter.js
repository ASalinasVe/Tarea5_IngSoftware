import { saludar } from "./saludador.js";

document.querySelector("#btn-espanol").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value.trim();
    const edad = parseInt(document.querySelector("#edad").value, 10);
    const genero = document.querySelector("#genero").value;

    if (nombre && !isNaN(edad)) {
        saludar(nombre, edad, genero, "es");
    } else {
        alert("Por favor, ingresa tu nombre y edad correctamente.");
    }
});

document.querySelector("#btn-ingles").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value.trim();
    const edad = parseInt(document.querySelector("#edad").value, 10);
    const genero = document.querySelector("#genero").value;

    if (nombre && !isNaN(edad)) {
        saludar(nombre, edad, genero, "en");
    } else {
        alert("Please enter your name and age correctly.");
    }
});


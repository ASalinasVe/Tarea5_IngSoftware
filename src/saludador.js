export function saludar1() {
    alert('Hola Usuario!');
}
 
export function saludar2(name) {
    const saludoMensaje = document.querySelector("#saludo-mensaje");
    saludoMensaje.innerHTML = "";

    const parrafo = document.createElement("p");
    parrafo.textContent = `¡Hola, ${name}!`;

    saludoMensaje.appendChild(parrafo);
}

export function saludar3(nombre) {
    const saludoMensaje = document.querySelector("#saludo-con-hora");
    saludoMensaje.innerHTML = "";

    const ahora = new Date();
    const hora = ahora.getHours(); 

    let saludo;
    if (hora >= 0 && hora < 12) {
        saludo = "¡Buenos días";
    } else if (hora >= 12 && hora < 19) {
        saludo = "¡Buenas tardes";
    } else {
        saludo = "¡Buenas noches";
    }

    const parrafo = document.createElement("p");
    parrafo.textContent = `${saludo}, ${nombre}!`; 

    saludoMensaje.appendChild(parrafo);
}

export function saludarPorGeneroEdad(nombre, genero, edad) {
    const saludoMensaje = document.querySelector("#saludo-genero-edad");
    saludoMensaje.innerHTML = "";

    let saludo = "";
    if (edad > 30) {
        saludo = genero === "masculino" ? `Sr. ${nombre}` : `Sra. ${nombre}`;
    } else {
        saludo = genero === "masculino" ? `Joven ${nombre}` : `Jovensita ${nombre}`;
    }

    const parrafo = document.createElement("p");
    parrafo.textContent = `¡Hola, ${saludo}!`; 

    saludoMensaje.appendChild(parrafo);
}

export function saludarEnEspanol(nombre) {
    const saludoMensaje = document.querySelector("#saludo-idioma");
    saludoMensaje.innerHTML = "";

    const saludo = `¡Hola, ${nombre}!`; // Saludo en español

    const parrafo = document.createElement("p");
    parrafo.textContent = saludo; 

    saludoMensaje.appendChild(parrafo);
}

export function saludarEnIngles(nombre) {
    const saludoMensaje = document.querySelector("#saludo-idioma");
    saludoMensaje.innerHTML = "";

    const saludo = `Hello, ${nombre}!`; // Saludo en inglés

    const parrafo = document.createElement("p");
    parrafo.textContent = saludo;

    saludoMensaje.appendChild(parrafo);
}

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
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
export function saludar(nombre, edad, genero, idioma) {
    const saludoMensaje = document.querySelector("#saludo-mensaje");
    saludoMensaje.innerHTML = "";

    const ahora = new Date();
    const hora = ahora.getHours();

    let saludoHora;
    if (hora >= 0 && hora < 12) {
        saludoHora = idioma === "es" ? "¡Buenos días" : "Good morning";
    } else if (hora >= 12 && hora < 19) {
        saludoHora = idioma === "es" ? "¡Buenas tardes" : "Good afternoon";
    } else {
        saludoHora = idioma === "es" ? "¡Buenas noches" : "Good evening";
    }

    let saludoGeneroEdad;
    if (edad > 30) {
        saludoGeneroEdad = genero === "masculino" 
            ? (idioma === "es" ? `Sr. ${nombre}` : `Mr. ${nombre}`) 
            : (idioma === "es" ? `Sra. ${nombre}` : `Mrs. ${nombre}`);
    } else {
        saludoGeneroEdad = genero === "masculino" 
            ? (idioma === "es" ? `Joven ${nombre}` : `Young ${nombre}`) 
            : (idioma === "es" ? `Jovencita ${nombre}` : `Young lady ${nombre}`);
    }

    const mensaje = `${saludoHora}, ${saludoGeneroEdad}!`;

    const parrafo = document.createElement("p");
    parrafo.textContent = mensaje;
    saludoMensaje.appendChild(parrafo);
}

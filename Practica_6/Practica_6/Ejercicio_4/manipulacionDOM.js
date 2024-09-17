// Obtener un elemento por su ID
let parrafo = document.getElementById("miParrafo");
console.log(parrafo.textContent); // Imprime el contenido de texto del párrafo con ID 'miParrafo'

// Cambiar el contenido del párrafo cuando se hace clic en el botón
let boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
    parrafo.textContent = "Texto actualizado";
    console.log(parrafo.textContent); // Imprime: Texto actualizado
});

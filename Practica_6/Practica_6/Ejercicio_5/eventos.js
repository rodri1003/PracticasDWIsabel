// Crear un evento para un botón
let boton = document.getElementById("miBoton"); // Obtener el botón por su ID

// Agregar un evento de clic al botón
boton.addEventListener("click", function() {
    console.log("Botón clickeado"); // Imprimir mensaje en la consola
    alert("Se hizo clic en el botón"); // Mostrar una alerta visual
});

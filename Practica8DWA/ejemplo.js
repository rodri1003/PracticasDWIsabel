// Seleccionamos el campo de entrada, el botón de agregar y la lista de tareas
var nuevaTareaInput = document.getElementById('nuevaTarea'); // Campo de texto para nueva tarea
var agregarBtn = document.getElementById('agregarBtn'); // Botón para agregar tarea
var listaTareas = document.getElementById('listaTareas'); // Lista donde se agregan las tareas

// Agregamos un evento al botón de agregar para escuchar los clics
agregarBtn.addEventListener('click', function() {
  // Obtenemos el texto ingresado en el campo de nueva tarea
  var textoTarea = nuevaTareaInput.value;

  // Verificamos que el campo no esté vacío
  if(textoTarea !== "") {
    // Creamos un nuevo elemento 'li' para la tarea
    var nuevaTarea = document.createElement('li');
    nuevaTarea.classList.add('tarea'); // Añadimos la clase 'tarea'

    // Creamos un span para contener el texto de la tarea
    var spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarea; // Asignamos el texto de la tarea
    nuevaTarea.appendChild(spanTexto); // Agregamos el texto al 'li'

    // Creamos un div para los botones
    var divBotones = document.createElement('div');

    // Creamos un botón para eliminar la tarea
    var eliminarBtn = document.createElement('button');
    eliminarBtn.classList.add('eliminarBtn'); // Añadimos la clase de estilos
    eliminarBtn.textContent = "Eliminar";

    // Evento para eliminar la tarea
    eliminarBtn.addEventListener('click', function() {
      listaTareas.removeChild(nuevaTarea); // Elimina la tarea del DOM
    });

    // Creamos un botón para modificar la tarea
    var modificarBtn = document.createElement('button');
    modificarBtn.classList.add('modificarBtn'); // Añadimos la clase de estilos
    modificarBtn.textContent = "Modificar";

    // Evento para modificar la tarea
    modificarBtn.addEventListener('click', function() {
      if (modificarBtn.textContent === "Modificar") {
        modificarBtn.textContent = "Guardar"; // Cambiamos el texto del botón
        var inputModificacion = document.createElement('input'); // Asignamos el texto de la tarea actual
        inputModificacion.type = "text";
        inputModificacion.value = spanTexto.textContent;
        nuevaTarea.replaceChild(inputModificacion, spanTexto); // Reemplazamos el texto por el campo de entrada
      } else {
        modificarBtn.textContent = "Modificar"; // Cambiamos de nuevo el botón a "Modificar"
        var nuevoTexto = nuevaTarea.firstChild.value;
        spanTexto.textContent = nuevoTexto;
        nuevaTarea.replaceChild(spanTexto, nuevaTarea.firstChild);
      }
    });

    // Añadimos los botones al div de botones
    divBotones.appendChild(modificarBtn);
    divBotones.appendChild(eliminarBtn);

    // Añadimos el div de botones a la tarea
    nuevaTarea.appendChild(divBotones);

    // Añadimos la nueva tarea a la lista de tareas
    listaTareas.appendChild(nuevaTarea);

    // Limpiamos el campo de entrada después de agregar la tarea
    nuevaTareaInput.value = "";
  } else {
    alert("Por favor, ingresa una tarea.");
  }
});

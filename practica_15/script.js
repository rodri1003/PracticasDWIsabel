// Seleccionar el boton y el cuerpo de la pagina 
const toggleButton = document.getElementById('toggleTheme');
const body = document.body;

// Añadir un evento al click del buton
toggleButton.addEventListener('click', () =>{
    // Verificar la clase actual y alternarla entre ligth-theme y dark-theme
    if(body.classList.contains('light-theme')){ 
        body.classList.remove('light-theme'); //Quitar el modo oscuro
        body.classList.add('dark-theme'); //Aplica el tema oscuro
    }else{
        body.classList.remove('dark-theme');//Quita el tema oscuros
        body.classList.add('light-theme');//Aplica el tema claro
    }
});

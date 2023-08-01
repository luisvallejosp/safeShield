//Variables:
var abrirMenu = document.querySelector('#abrirMenu');
var cerrarMenu = document.querySelector('#cerrarMenu');
var mainMenu = document.querySelector('#mainMenu');

console.log(abrirMenu);


//Función para desplegar el menú 
function desplegar (){
    mainMenu.classList.toggle('desplegar');
}



//Eventos
abrirMenu.addEventListener("click", desplegar);




//1 extraer datos de los input
//2 compararlos con la base de datos
//3 agregar un div que permita ver el nombre de usuario

// cuando se termine de cargar la pagina inicializo la funcion
window.onload = mostrarProductos();
window.onload  = yaIngresado();

if (localStorage.getItem('Carrito')!= null){
    window.onload = mostrarCarrito()
}


//Creo 
const usuarioActual = new Usuario;

//Creo el HTML
let div = document.createElement("div");

//en todas las paginas que tengo cuando se registra tiene que aparecer el nombre del Usuario actual 

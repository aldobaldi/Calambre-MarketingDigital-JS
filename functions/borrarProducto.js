
const borrarProducto = (id) =>{
    let clave = 'Carrito'
    let carrito = JSON.parse(localStorage.getItem(clave))
    let nuevoCarrito = carrito.filter(p => p.pId != id)
    localStorage.setItem(clave, JSON.stringify(nuevoCarrito));
    mostrarCarrito()
}



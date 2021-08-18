
let carrito=[]
let clave ='Carrito'

const Comprar = (Id) => {
  
  if (localStorage.getItem('Usuario') != null){

  let producto = new Producto;
  
  let listaProducto = JSON.parse(localStorage.getItem('productos'));

  //extraigo el producto que se selecciono 
  producto = listaProducto.find( (p)=> p.pId === Id);
  producto.cantidad = 1;

  if (carrito.find((p) => p.pId === Id) != null){

    alert('Este producto ya se encuetra en tu carrito')

  }else{

    carrito.push(producto)
  }
  
  localStorage.setItem(clave, JSON.stringify(carrito));
}else{
  alert('Debe registrarse para poder Comprar')
  window.open("./ingresar.html")
}
};
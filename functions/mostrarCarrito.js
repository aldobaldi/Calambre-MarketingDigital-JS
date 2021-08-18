const sumaProductos = ()=>{
    let clave = 'Carrito'
    let carrito = JSON.parse(localStorage.getItem(clave))
    const valorTotal = carrito.reduce((total,item) => {
        return total += item.pValor;
    },0)

    $("#totalCompra").replaceWith(`
        <div class="col" id="totalCompra" >
                  <h3 class="itemCartTotal text-black">Total U$S: ${valorTotal}</h3>
                </div>`)
}


const mostrarCarrito =()=>{

    let vistaCarrito=``
    let clave = 'Carrito'  
    let lista = JSON.parse(localStorage.getItem(clave));
    console.log(lista)
  
     lista.forEach(
        (l) =>(vistaCarrito +=`<tr>
        <td>${l.pNombre}</td>
        <td>${l.pValor}</td>
        <td><button class="btn btn-danger" onclick ="borrarProducto(${l.pId})">x</button></td>
      </tr>
      <p>TOTAL = `)
     );
     $("#items").html(vistaCarrito)
    
     sumaProductos();

  };
  
  
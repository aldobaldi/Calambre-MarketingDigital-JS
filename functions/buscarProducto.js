async function buscarProductos() {

    const lista = await $.get("./db/productos.json", function(lista){
        return lista;
    }); 
        let productoEncontrado= lista

            return productoEncontrado
};
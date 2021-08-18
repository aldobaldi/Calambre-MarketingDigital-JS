const mostrarProductos = async () => {

    //extraigo con jquery datos de mi base de datos y la guardo en listaExistente
    let listaProducto =  await buscarProductos();

    //clave valor LocalStorage
    let clave = "productos"

    //si el local storage esta vacio cargo listaExistente
    if (localStorage.getItem(clave) == null){
        localStorage.setItem(clave,JSON.stringify(listaProducto));
    }

    //extraigo los item del JSON que se a guardado en el local storage (getItem)
    let vistaCursos = ``;
    let vistaEbooks= ``;
    let productList = localStorage.getItem(clave);
    let lista = JSON.parse(productList);

    //Muestro Cursos
    let cursos = lista.filter( curso => curso.pTipo == "Curso")

    cursos.forEach(
        (p) =>
        (vistaCursos += `
        <div id='${p.pId}' class="card d-inline-flex p-2" style="width: 18rem;">
            <img class="card-img-top" src="${p.pImagen}" alt="${p.pNombre}">
            <div class="card-body">
            <h5 class="card-title">${p.pNombre}</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: U$S ${p.pValor}</li>
            </ul>
            <div class="card-body">
            <button onclick="Comprar(${p.pId}), mostrarCarrito()" type="button" class="btn btn-danger">Comprar</button> 
            </div>
        </div>`)
      

    );
        //agrego el html
    $("#curso").html(vistaCursos);

    
    //Muestro los Ebooks
    let ebook = lista.filter( curso => curso.pTipo == "Ebook");
    ebook.forEach(
        (p) =>
        (vistaEbooks += `
        <div id="${p.pId}" class="card d-inline-flex p-2" style="width: 18rem;">
            <img class="card-img-top" src="${p.pImagen}" alt="${p.pNombre}">
            <div class="card-body">
            <h5 class="card-title">${p.pNombre}</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: U$S ${p.pValor}</li>
            </ul>
            <div class="card-body">
            <button onclick="Comprar(${p.pId}),mostrarCarrito()" type="button" class="btn btn-danger">Comprar</button> 
            </div>
        </div>`)
    );
        //agrego el html
    $("#ebook").html(vistaEbooks);

};
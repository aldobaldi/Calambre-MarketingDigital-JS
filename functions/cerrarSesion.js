const cerrarSesion =()=>{

    localStorage.removeItem('usuario')
    localStorage.removeItem('Carrito')
    
    $("#lista").replaceWith(`<li class="nav-item">
    <a class="nav-link" id="btnIngresar" href="ingresar.html">Ingresar</a>
     </li>  `)
};
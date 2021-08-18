const yaIngresado =()=>{

    let usuario = JSON.parse(localStorage.getItem("usuario"));
    
    if(usuario != null){

      $("#btnIngresar").replaceWith(
        `<div class="dropdown show">
        <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="btnIngresar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ${usuario.nombreUsuario}
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item">Carrito</a> 
          <a class="dropdown-item">Cerrar Session</a>
        </div>
        </div>`);
    }else{
        
        return false
    }
}


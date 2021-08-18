const acceder = async () => {
  
   //extraemos valores del form 
  let mail;
  let pass;

    mail = $("#inMail").val();
    pass = $("#inPassword").val();

    let usuarioActual = await buscarUsuarioExistente(pass, mail);

      //MOSTRAR SIEMPRE EL NOMBRE DE USUARIO SI ESTA EN EL LOCAL STOTRAGE
    if (usuarioActual != null){

      localStorage.setItem("usuario", JSON.stringify(usuarioActual));
      let mostrarUsuario= localStorage.getItem('usuario');
      let valor = JSON.parse(mostrarUsuario);
      $("#btnIngresar").replaceWith(
      `<div class="dropdown show">
      <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="btnIngresar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${valor.nombreUsuario}
      </a>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a class="dropdown-item" href="#">Carrito</a>
        <a class="dropdown-item" onclick = "cerrarSesion()">Cerrar Session</a>
      </div>
      </div>`);
      
      document.getElementById("form").reset();

    }else{

      $("#mError").html('<p id="mError">Su Usuario/Contraseña son incorrectas.</p>')
    }

};

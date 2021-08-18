const viewRegistrarse = () =>{

    $('#form').html(`<form class="formulario" id="form">
    <label >Nombre:</label>
    <input type="text" id="inName" name="Nombre"> 
    <label >Nombre de Usuario:</label>
    <input type="text" id="inUsuario" name="NombreUsuario"> 
    <label >Email:</label>
    <input type="email" id="inEmail" name="Email"> 
    <label>Contraseña:</label>
    <input type="password" id="inPassword" name="Contraseña">
    <label>Telefono:</label>
    <input type="numero" id="inTelefono" name="Telefono">
    <div class="botones">
      <p id="mError"></p>
      <button type="button" onclick="registrar()" name="Ingresar">Registrarme</button>
      <input type="reset" name=" Limpiar">
    </div>
  </form>`).slideDown(slow);
};
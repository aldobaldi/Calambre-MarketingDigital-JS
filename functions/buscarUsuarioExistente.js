async function buscarUsuarioExistente(pass,mail) {

    const lista = await $.get("./db/UsuariosExistentes.json", function(lista){
        return lista;
    }); 
        let usuarioEncontrado= lista.find(
            (usuario)=> usuario.pass == pass && usuario.email==mail
        )

            return usuarioEncontrado
};
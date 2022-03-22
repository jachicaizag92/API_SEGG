const client = require('../database/bd');
const Token = require('../helpers/token');



class Usuarios extends Token {

    objUsuario



    constructor(objUsuario) {
        super()
        this.correoElectronico = objUsuario.correo_electronico
        this.primerNombre = objUsuario.primer_nombre
        this.segundoNombre = objUsuario.segundo_nombre
        this.primerApellido = objUsuario.primer_apellido
        this.segundoApellido = objUsuario.segundo_apellido
        this.numeroIdentificacion = objUsuario.numero_identificacion
        this.id = objUsuario.id
    }

    // if (objUSuario) {
    //     const {
    //         correo_electronico,
    //         primer_nombre,
    //         segundo_nombre,
    //         primer_apellido,
    //         segundo_apellido,
    //         numero_identificacion
    //     } = usuario
    //     console.log(usuario);
    // }
    // if(this.objUsuario === objUsuario)
}


//    credenciales(objUsuario){

//         this.correoElectronico = objUsuario.correo_electronico
//         this.primerNombre = objUsuario.primer_nombre
//         this.segundoNombre = objUsuario.segundo_nombre
//         this.primerApellido = objUsuario.primer_apellido
//         this.segundoApellido = objUsuario.segundo_apellido
//         this.numeroIdentificacion = objUsuario.numero_identificacion
//         this.id = objUsuario.id

//     }


// generarToken(payload) {
//     return super.genToken(payload)
// }


// class credencialUsuario {


//     constructor(objUSuario) {

//     }
// }



// class UsuarioSingleton {

//     constructor() {
//         throw new Error('usar singleton')
//     }
//     static getInstance(objUsuario) {
//         if (!UsuarioSingleton.instance) {
//             UsuarioSingleton.instance = new Usuarios(objUsuario);
//         }
//         return UsuarioSingleton.instance
//     }
// }




module.exports = Usuarios
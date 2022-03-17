const client = require('../database/bd');
const Token = require('../helpers/token');



class Usuarios extends Token {

    objUsuario

    constructor() {
        super()
    }

    objetoUsuario = async(email, password) => {
        let respuesta;
        if (!this.objUsuario) {
            await client.query(`
            select 
                per.correo_electronico,
                per.primer_nombre,
                per.segundo_nombre,
                per.primer_apellido,
                per.segundo_apellido,
                per.numero_identificacion,
                per.id
            from 
                personas per
                INNER JOIN usuarios usr
                on per.id = usr.id_persona
            where
                usr.nombre_usuario = $1 AND
                usr.clave_acceso = md5($2)
            limit 1`, [email, password])
                .then(res => {
                    respuesta = res.rows;
                })
                .catch(err => {
                    respuesta = err;
                })
                // .finally(() => {
                //     client.end();
                // })
            this.objUsuario = respuesta
        } else {
            respuesta = this.objUsuario
        }
        return respuesta;
    }


    generarToken(payload) {
        return super.genToken(payload)
    }
}



class UsuarioSingleton {

    constructor() {
        throw new Error('usar singleton')
    }
    static getInstance() {
        if (!UsuarioSingleton.instance) {
            UsuarioSingleton.instance = new Usuarios();
        }
        return UsuarioSingleton.instance
    }
}




module.exports = Usuarios
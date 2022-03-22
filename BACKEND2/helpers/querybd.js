const pool = require('../database/connection')


obtenerUsuario = async(email, password) => {
    try {

        let respuesta;

        await pool.query(`
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

        return respuesta[0];

    } catch (error) {
        console.log('usuario no encontrado ' + error);
    }
}

module.exports = {
    obtenerUsuario
}
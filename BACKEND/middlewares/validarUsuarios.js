/**
 * importaciones requeridas
 */
const { response, request } = require("express");
const { obtenerUsuario } = require('../helpers/querybd');
// ----------------------------------------------------------------------------------

/**
 * Middleware para validar usuarios que esten dentro de la base de datos
 * antes de que pasen al controlador.
 * @param {email, password} req 
 * @param {estado json} res 
 * @param {si pasa la comprobacion sigue al controlador} next 
 * @returns 
 */
const validarUsuario = async(req = request, res = response, next) => {

    const { email, password } = req.body
    const usuario = await obtenerUsuario(email, password)

    if (usuario === undefined) {
        return res.json({
            ok: false
        })
    } else {
        console.log('autorizado');
    }

    next()
}


module.exports = { validarUsuario }
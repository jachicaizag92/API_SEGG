/**
 * importaciones requeridas
 */
const { request, response } = require('express')
const { generarToken, generarRefreshToken } = require('../helpers/generarToken')
    // ----------------------------------------------------------------------------------


/**
 * Funcion que permite obtener el token al realizar un login
 * @param {email, password} req 
 * @param {token(encripatdo el payload), tokenRefresh} res 
 * devuleve un token firmado desde el backend y su respectivo tokenrefresh
 */
const users = async(req = request, res = response) => {

    const { email, password } = req.body
    const token = await generarToken(email, password)
    const tokenRefresh = await generarRefreshToken(email, password)

    res.json({
        msg: true,
        status: 200,
        token: token,
        tokenRefresh: tokenRefresh
    })
}


module.exports = {
    users
}
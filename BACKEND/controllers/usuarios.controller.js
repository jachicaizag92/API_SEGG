/**
 * importaciones requeridas
 */
const { request, response, json } = require('express')
const { generarToken, generarRefreshToken } = require('../helpers/generarToken')
const uuidv4 = require('uuid');
const Encriptacion = require('../helpers/encrypted');
const jwt = require('jsonwebtoken');
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
    const usr = jwt.verify(token, process.env.SECRET_JWT_SEED)
    const payload = usr.encriptacion
    const encriptacion = new Encriptacion
    const user = JSON.parse(encriptacion.desencriptar(payload))
    console.log(user.correo_electronico);



    const tokenRefresh = await generarRefreshToken(email, password)

    res.json({
        msg: true,
        personData: 'j',
        sessionOID: 2,
        tokenRefresh: tokenRefresh,
        token: token,
        status: 200

    })
}


module.exports = {
    users
}
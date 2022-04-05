/**
 * importaciones requeridas
 */
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Encriptacion = require('../helpers/encrypted');
// ----------------------------------------------------------------------------------



/**
 * Funcion para generar un token donde a su ves obtiene los datos del usuariio
 * los convierte en json y los encripta con la libreria encrypted
 * recibe los paramentros
 * @param {usuario o email} email 
 * @param {password_usuario} password 
 * @returns retorna un token encriptando el payload del mismo 
 */


const generarToken = async(email, password) => {

    const email2 = email
    const password2 = password
    const usuario = await obtenerUsuario(email2, password2)
    let encriptacion = new Encriptacion().encriptar(JSON.stringify(usuario));

    return token = jwt.sign({ encriptacion }, process.env.SECRET_JWT_SEED, { expiresIn: '12h' })
}



/**
 * Funcion para generar el token refresh donde a su ves obtiene los datos del usuariio
 * los convierte en json y los encripta con la libreria encrypted
 * recibe los paramentros
 * @param {usuario o email} email 
 * @param {password_usuario} password 
 * @returns retorna un token encriptando el payload del mismo la firma es diferente a la de generarToken
 */


const generarRefreshToken = async(email, password) => {
    const email2 = email
    const password2 = password
    const usuario = await obtenerUsuario(email2, password2)
    let encriptacion = new Encriptacion().encriptar(JSON.stringify(usuario));

    return tokenRefresh = jwt.sign({ encriptacion }, process.env.SECRET_JWT_REFRESH, { expiresIn: '8h' })
}




module.exports = { generarRefreshToken, generarToken }
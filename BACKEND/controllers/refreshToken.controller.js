/**
 * importaciones requeridas
 */
const { request, response } = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// ----------------------------------------------------------------------------------



/**
 * Controlador para la comprobación del tokenRefresh
 * @param {recibe el refreshToken} req 
 * @param {devuelve nuevo token valido} res 
 * envia una respuesta a una peticion POST retornando un TOKEN valido
 */
const refreshToken = async(req = request, res = response) => {

    const refreshToken = req.headers.refresh;
    console.log(refreshToken);

    if (!(refreshToken)) {
        res.status(400).json({
            msg: "Algo fallo"
        })
    } else {
        const verifyRefreshToken = jwt.verify(refreshToken, process.env.SECRET_JWT_SEED)
        console.log(verifyRefreshToken);
    }


}

module.exports = { refreshToken }
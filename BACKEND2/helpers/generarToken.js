const jwt = require('jsonwebtoken');
require('dotenv').config();


const generarToken = async(email, password) => {
    const email2 = email
    const password2 = password

    const usuario = await obtenerUsuario(email2, password2)


    return token = jwt.sign(usuario, process.env.SECRET_JWT_SEED, { expiresIn: '12h' })



}

module.exports = generarToken
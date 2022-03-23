const jwt = require('jsonwebtoken');
require('dotenv').config();
const Encriptacion = require('../helpers/encrypted');


const generarToken = async(email, password) => {
    const email2 = email
    const password2 = password

    const usuario = await obtenerUsuario(email2, password2)
        // const encriptacion = new Encriptacion
        // const encripyt = encriptacion.encriptar()
    let encriptacion = new Encriptacion().encriptar(JSON.stringify(usuario));


    return token = jwt.sign({ encriptacion }, process.env.SECRET_JWT_SEED, { expiresIn: '12h' })



}

module.exports = generarToken
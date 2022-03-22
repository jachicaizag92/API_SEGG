const { response, request } = require("express");
const { obtenerUsuario } = require('../helpers/querybd')


const validarUsuario = async(req = request, res = response, next) => {

    const { email, password } = req.body

    const usuario = await obtenerUsuario(email, password)
    console.log(usuario);

    if (usuario === undefined) {

        return res.status(401).json({
            ok: false,
            msg: 'no esta autorizado'
        })

        console.log('no autorizado');
    } else {
        console.log('autorizado');
    }

    next()
}

module.exports = validarUsuario
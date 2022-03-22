const { request, response } = require('express')
const generarToken = require('../helpers/generarToken')



const users = async(req = request, res = response) => {

    const { email, password } = req.body

    const token = await generarToken(email, password)
        // console.log(token);


    res.json({
        msg: 'peticion post a /api - Controlador',
        token

    })
}


module.exports = {
    users
}
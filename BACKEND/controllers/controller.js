const client = require('../database/bd')
const { generarToken } = require('../helpers/jwt')
const {} = require('../helpers/jwt')
    // const bcrypt = require('bcryptjs')


const crearUsuario = async(req, res) => { //<<--- igualamos res = response para obtener tipado
    // client.query("select * from usuarios limit 10", (error, results) => {
    //     if (error) throw error;
    //     res.status(200).json(results.rows)
    // })

    try {
        const { email, password, id } = req.body
        const usuario = email
        const passd = password
        const uid = id
        console.log(usuario, passd, uid);

        // salt = bcrypt.genSaltSync()
        // passd = bcrypt.hashSync(passd, salt)

        const token = await generarToken(uid, usuario)

        console.log(token);

        return res.status(200).json({
            ok: true,
            msg: 'correcto'
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: true,
            msg: 'ERROR! COMUNICARSE ADM.'
        })
    }



}


module.exports = { crearUsuario }
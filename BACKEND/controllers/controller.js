const Encriptacion = require('../helpers/encrypted')
const Usuarios = require('../helpers/usuarios')
    // const bcrypt = require('bcryptjs')


const crearUsuario = async(req, res) => { //<<--- igualamos res = response para obtener tipado
    const { email, password } = req.body
        // const email = 'dfarteaga@unicesmag.edu.co';
        // const password = 'Pruebas@Unicesmag';
    console.log(email, password);
    let tokenEncript

    let sesion = new Usuarios;

    await sesion.objetoUsuario(email, password)
        .then(res => {
            if (res[0]) {
                objUsuario = res[0];
                let encriptacion = new Encriptacion().encriptar(JSON.stringify(objUsuario));
                return sesion.generarToken({ encriptacion })
            } else {
                console.log('Usuario o Contraseña Incorrecta');
            }
        })
        .then((token) => {
            if (token) {
                console.log(token);
                tokenEncript = token
            }
        })
        .catch(err => {
            console.log(err);
        })

    res.json(tokenEncript)


    //     salt = bcrypt.genSaltSync()
    //     passd = bcrypt.hashSync(passd, salt)
}

module.exports = { crearUsuario }
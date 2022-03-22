const { request, response } = require('express')


const crearUsuario = async(req = request, res = response) => { //<<--- igualamos res = response para obtener tipado
    // const { email, password } = req.body
    // const email = 'dfarteaga@unicesmag.edu.co';
    //     // const password = 'Pruebas@Unicesmag';
    // console.log(email, password);
    // let tokenEncript

    // let sesion


    // await sesion.objetoUsuario(email, password)
    //     .then(res => {
    //         if (res[0]) {
    //             objUsuario = res[0];
    //             let encriptacion = new Encriptacion().encriptar(JSON.stringify(objUsuario));
    //             return sesion.generarToken({ encriptacion })
    //         } else {
    //             console.log('Usuario o Contraseña Incorrecta');
    //         }
    //     })
    //     .then((token) => {
    //         if (token) {
    //             console.log(token);
    //             tokenEncript = token
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })

    // res.json(tokenEncript)


    //     salt = bcrypt.genSaltSync()
    //     passd = bcrypt.hashSync(passd, salt)




    //////////////////////////////////////////////////////


    // const { email, password } = req.body
    // const email = 'jachg24260'; // dfarteaga@unicesmag.edu.co
    // const password = 'Pruebas@Unicesmag';
    // console.log(email, password);
    // let tokenEncript
    // let usuario



    // objetoUsuario(email, password)
    //     .then(res => {
    //         if (res[0]) {
    //             // console.log(res[0]);
    //             sesion = new Usuarios(res[0])
    //             sesion2 = JSON.stringify(sesion);
    //             console.log(sesion2);
    //         } else {
    //             sesion = new Usuarios(res[0])
    //         }

    //     })


    console.log('hola');




}

module.exports = { crearUsuario }
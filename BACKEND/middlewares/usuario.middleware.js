// const { response, request } = require("express");
// const objetoUsuario = require('../helpers/usuarioExiste')
// const Usuarios = require('../helpers/usuarios')




// const authUser = (req = request, res = response, next) => {

//     const { email, password } = req.body

//     objetoUsuario(email, password)
//         .then(res => {
//             if (res[0]) {
//                 // console.log(res[0]);
//                 sesion = new Usuarios(res[0])
//                 sesion2 = JSON.stringify(sesion);
//                 console.log(sesion2);

//             } else {
//                 console.log('error');
//             }
//         })

//     next()

// }

// module.exports = {
//     authUser
// }
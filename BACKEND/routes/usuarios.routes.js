/**
 * importaciones requeridas
 */
const { Router } = require('express');
const passport = require('passport');

const { refreshToken } = require('../controllers/refreshToken.controller');
const { validarUsuario } = require('../middlewares/validarUsuarios');
const { users } = require('../controllers/usuarios.controller');
// ----------------------------------------------------------------------------------


const router = Router();

/**
 * Rutas princiales, middleware --> controladores 
 */

router.post('/usr', [validarUsuario], users)
    // router.post('/refresh-token', [passport.authenticate('jwt', { session: false, failureRedirect: "/api/login/pr" })], refreshToken)
router.post('/refresh-token', refreshToken)



module.exports = router
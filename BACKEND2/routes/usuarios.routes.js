const { Router } = require('express');
const passport = require('passport');
const { users } = require('../controllers/usuarios.controller');
const validarUsuario = require('../middlewares/validarUsuarios');
const { prueba, prueba2 } = require('../controllers/prueba.controller')

const router = Router();

router.post('/usr', [validarUsuario], users)
router.get('/pr', prueba)
router.post('/prueba', [passport.authenticate('jwt', { session: false, successRedirect: "https://www.youtube.com/watch?v=EcCIlxfxc4g&t=19s", failureRedirect: "/api/login/pr" })], prueba2)






module.exports = router
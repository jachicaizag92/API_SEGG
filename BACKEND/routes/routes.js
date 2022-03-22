const { Router } = require('express');
const router = Router();
const { crearUsuario } = require('../controllers/controller')
const { authUser } = require('../middlewares/usuario.middleware')


router.post('/pr', [authUser], crearUsuario)

module.exports = router
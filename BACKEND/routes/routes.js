const { Router } = require('express');
const router = Router();
const { crearUsuario } = require('../controllers/controller')


router.post('/pr', crearUsuario)

module.exports = router
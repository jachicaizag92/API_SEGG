const { Router } = require('express');
const router = Router();
const { crearUsuario } = require('../controllers/controller')


router.get('/', crearUsuario)

module.exports = router
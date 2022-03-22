const { Router } = require('express')
const { crearUsuario } = require('../controllers/controller')

const router = Router();

router.get('/usr', crearUsuario)

module.exports = { router }
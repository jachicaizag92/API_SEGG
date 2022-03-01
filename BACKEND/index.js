const express = require('express')
const app = express()
const cors = require('cors');


// const routers = require('./routes/routes')

app.get('/', (req, res) => {
    res.send('funcionando')
})


//CORS
app.use(cors())
app.use(express.json())


//RUTAS
app.use('/api', require('./routes/routes'))

app.listen(3400, () => {
    console.log('corriendo el puerto 3300');
})
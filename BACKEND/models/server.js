const express = require('express');
const cors = require('cors')


class Server {

    constructor() {

        //server
        this.app = express();
        this.port = process.env.PORT
        this.loginPath = '/api/login'

        //Middlewares
        this.middlewares();
        this.routes();


    }

    middlewares() {
        //lectura formatos JSON
        this.app.use(express.json());
        //cors
        this.app(cors())
    }

    routes() {
        this.app.use(this.loginPath, require('../routes/routes'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo correctamente en el puerto ${this.port}`);
        })
    }

}

module.exports = Server
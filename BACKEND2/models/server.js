const express = require('express');
const cors = require('cors');


const passport = require('passport')
const cookieParser = require('cookie-parser');
const session = require('express-session');

const ExtractJWT = require('passport-jwt').ExtractJwt
const JWTStrategy = require('passport-jwt').Strategy


/**
 * Clase Server para instanciar un servidor de express
 */
class Server {


    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/login'

        //Middlewares
        this.middlewares()
        this.routes()

    }

    middlewares() {

        // lectura formatos JSON 
        this.app.use(express.json())

        //cors
        this.app.use(cors())

        //
        // this.app.use(cookieParser('secreto'))

        // this.app.use(session({
        //     secret: 'secreto6',
        //     resave: true,
        //     saveUninitialized: true
        // }))

        // this.app.use(passport.initialize());
        // this.app.use(passport.session());


        passport.use(new JWTStrategy({
            secretOrKey: process.env.SECRET_JWT_SEED,
            jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
        }, async(token, done) => {
            try {
                return done(null, token)
            } catch (error) {
                done(error)
            }
        }))

    }

    // separar la logica de las routes
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios.routes'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('corriendo en el puerto ', this.port);
        })
    }


}

module.exports = Server
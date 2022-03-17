require("dotenv").config();
const jwt = require('jsonwebtoken')

const generarToken = (name) => {
    const payload = { name }

    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '12h'
        }, (err, token) => {

            if (err) {
                console.log(err)
                reject(err)
            } else {
                resolve(token)
            }
        })
    })
}

function genToken(name) {

    return jwt.sign(name, process.env.SECRET_JWT_SEED, { expiresIn: '12h' })

}

module.exports = {
    genToken
}
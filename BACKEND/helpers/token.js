const jwt = require('jsonwebtoken')
require("dotenv").config();

class Token {
    token;
    constructor() {}
    genToken(name) {
        this.token = jwt.sign(name, process.env.SECRET_JWT_SEED, { expiresIn: '12h' })
        return this.token
    }
}


module.exports = Token
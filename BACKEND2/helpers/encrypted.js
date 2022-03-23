let CryptoJS = require("crypto-js");

class Encriptacion {



    constructor() {

    }

    encriptar(msj) {
        const encrypted = CryptoJS.AES.encrypt(msj, process.env.CRYPT);
        return encrypted.toString()
    }

    desencriptar(encrypt) {
        const decrypted = CryptoJS.AES.decrypt(encrypt, process.env.CRYPT).toString(CryptoJS.enc.Utf8);
        return decrypted;
    }

}

module.exports = Encriptacion
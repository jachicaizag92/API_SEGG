/**
 * importaciones requeridas
 */
let CryptoJS = require("crypto-js");
// ----------------------------------------------------------------------------------


/**
 * Clase de encriptación con los metodos de encriptar y desencriptar respectivamente
 ***  metodo encriptar
 *  @param {mensaje a encriptar} msj
 ***  metodo desencriptar
 *  @param {mensaje a desencriptar} msj
 */
class Encriptacion {

    constructor() {}

    encriptar(msj) {
        const encrypted = CryptoJS.AES.encrypt(msj, process.env.CRYPT);
        return encrypted.toString()
    }

    desencriptar(msj) {
        const decrypted = CryptoJS.AES.decrypt(msj, process.env.CRYPT).toString(CryptoJS.enc.Utf8);
        return decrypted;
    }
}


module.exports = Encriptacion
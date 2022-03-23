const Encriptacion = require('../helpers/encrypted')

const prueba = (req, res) => {

    const a = 'U2FsdGVkX1+iTrWS11XPt+2hNLDxw+hrW+VKjXIEzvU7STFQaGaUeDrR9bzN5PDeJuTYe2iSfOyoo0KQkYbXyDbHxD9XZl+61Owcs6FRkWoIVk6d1RGEBTRqxOQAT7yQ1NcTRQGQQRT/YOnX6TI2TQiAAFjj+TbV1+mKnIUj+in9cy6kGRwhgplE5Tm/Zy4hOaTTYBmHNfbGtXfPAteuVS2C6rFr4DmjLpB+Os0ctXSWiFd+sEQpXT0Ti2RZSpTJbvt0YMXp+3V7g7xVQyNQ70KHhT8OSe85fq2GpxQNeJhw0NYCLZq1ut6Bqf/Mxxgd'

    const des = new Encriptacion().desencriptar(a)
    console.log(des);


    res.json({
        msg: 'Hola',
        // token

    })



}

const prueba2 = (req, res) => {
    // console.log(rreq.user.encriptacioneq.user.encriptacion);

    const a = req.user.encriptacion;
    const des = new Encriptacion().desencriptar(a)

    res.json({
        msg: des
            // token

    })
}

module.exports = { prueba, prueba2 }
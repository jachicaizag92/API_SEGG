const prueba = (req, res) => {
    res.json({
        msg: 'Hola',
        // token

    })
}

const prueba2 = (req, res) => {
    res.json({
        msg: 'Hola desde prueba 2',
        // token

    })
}

module.exports = { prueba, prueba2 }
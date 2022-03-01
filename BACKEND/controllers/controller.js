const client = require('../bd/bd')


const crearUsuario = async(req, res) => { //<<--- igualamos res = response para obtener tipado
    client.query("select * from usuarios limit 10", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })


}


module.exports = { crearUsuario }
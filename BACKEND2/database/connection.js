const { Pool, Client } = require('pg');
require('dotenv').config()

const pool = new Pool({

    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,

});

pool.connect()

module.exports = pool
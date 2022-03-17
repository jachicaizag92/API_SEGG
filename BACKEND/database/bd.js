const { Client } = require('pg');
require('dotenv').config()

const client = new Client({
    // user: process.env.PGUSER,
    // host: process.env.PGHOST,
    // database: process.env.PGDATABASE,
    // password: process.env.PGPASSWORD,
    // port: process.env.PGPORT,

    // user: "root",
    // host: "localhost",
    // database: "jachg",
    // password: "root",
    // port: "5432",
});

client.connect();

module.exports = client
const { Client } = require('pg');

const client = new Client({
    // user: process.env.PGUSER,
    // host: process.env.PGHOST,
    // database: process.env.PGDATABASE,
    // password: process.env.PGPASSWORD,
    // port: process.env.PGPORT,

    user: "jachg",
    host: "127.0.0.1",
    database: "jachg",
    password: "root",
    port: "5432",
});

client.connect();

module.exports = client
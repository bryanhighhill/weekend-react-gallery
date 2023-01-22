const pg = require('pg');

const Pool = pg.Pool; 

const pool = new Pool({
    database: 'react_gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
});

pool.on('connect', ()=> { 
    console.log('postgres is connected');
});

pool.on('error', (error)=> {
    console.log('error connecting to the database', error);
});

module.exports = pool;
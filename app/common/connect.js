const mysql = require('mysql');

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Phongdo123@',
    database: 'demo_node_api'
})

connection.connect((err) => {
    if (err) throw err;
})

connection.on('error', (err) => {
    console.log('mysql err: ' + err);
})

module.exports = connection;
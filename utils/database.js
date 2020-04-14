const mysql = require('mysql');
const { database } = require('./config')

const connection = mysql.createConnection({
    host: database.host,
    user: database.user,
    database: database.name,
    password: database.password,
    port: database.port
  });


exports.getConnection=() =>{
    return connection;
}
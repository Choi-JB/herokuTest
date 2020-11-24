const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'us-cdbr-east-02.cleardb.com',
  port: 3306, 
  user: 'babe7a2c1e0cf9',
  password: '2a46784d',
  database: 'heroku_f731eb1b594831b',
  connectionLimit: 100,
  dateStrings:'date',
  multipleStatements: true,
})


module.exports = pool
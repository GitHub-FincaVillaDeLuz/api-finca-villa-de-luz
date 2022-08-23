/*
const mysql = require('mysql2')
require('dotenv').config()

const getConnection = () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  })
  connection.connect(error => {
    if (error) {
      console.error('error connecting: ' + error.stack)
      return
    }
  })

  return connection
}

exports.getConnection = getConnection
*/

const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  port: 3306,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
  // timezone: "ist",
});
module.exports = pool;
var mysql = require("mysql2");
const PoolManager  = require("mysql-connection-pool-manager")

var connection = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "Yaya2410",
    database: "shop", 
    charset: "utf8mb4_unicode_ci", 
    port: 3306
  });
  

connection.getConnection((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("My SQL Database Connected..");
  }
});
module.exports = connection;

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database: "auth",
  user: "root",
  password: ""
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected");
});



module.exports = con
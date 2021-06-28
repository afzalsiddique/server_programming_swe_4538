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



// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (email, firstname,lastname,password) VALUES ('Company Inc', 'Highway 37')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

module.exports = con
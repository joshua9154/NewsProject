var mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
  host: "us-east.connect.psdb.cloud",
  user: "w5wf94r18cxf2qucnz7a",
  password: "pscale_pw_UQYzLPCNoNTe4YDn0qjUNWr83tWuwnG8Ckih357oOKT",
  database: "patient-intake",
  ssl : {
      rejectUnauthorized: true
  }
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("SQL Works");
  }
});


var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'us-east.connect.psdb.cloud',
  user            : 'w5wf94r18cxf2qucnz7a',
  password        : 'pscale_pw_UQYzLPCNoNTe4YDn0qjUNWr83tWuwnG8Ckih357oOKT',
  database        : 'patient-intake',
  ssl : {
      rejectUnauthorized: true
  }
  
});

module.exports = pool;
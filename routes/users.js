const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/db");

router.get("/", (req, res) => {
  res.json("Hello");
});

router.get("/patient", (req, res) => {
  //mysqlConnection.query("INSERT INTO 'Patient' (createdAt, modifiedAt, email, firstName ) VALUES (now(), now(), 'matt.j.smith@gmail.com', 'Matt')" ,(err, rows, fiels) => {
    mysqlConnection.query("select * from Patient;" ,(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;

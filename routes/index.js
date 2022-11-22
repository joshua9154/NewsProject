 var express = require("express");
 var router = express.Router();
 const pool = require("../db/db");

// /* GET home page. */
 //router.get("/", function(req, res, next) {
 //  res.render("index", { title: "Express" });
// });

 //router.post("/subscribe", function(req, res, next) {
  // const { name, email } = req.body;
router.get("/", function(req, res, next) {
   res.render("patientPage", { title: "Express" });
 });

 router.post("/Subscribe", function(req, res, next) {
   const { title, firstName, middleInitial, lastName, phone, email, sex, ssn, dob, street, city, state, zip, insuranceCompany, plan, groupNumber, cardHolder, signature } = req.body;
   var result=0
   // 1. Validate the user data
  // 2. Subscribe the user to the mailing list
   // 3. Send a confirmation email
       pool.query("INSERT INTO Patients (title,firstName,middleInitial,lastName,phone,email,sex,ssn,dateOfBirth,street,city,state,zip,insuranceCompany,plan,groupNumber,cardholder,signature) VALUES ('"+title+"','"+firstName+"','"+middleInitial+"','"+lastName+"','"+phone+"','"+email+"','"+sex+"','"+ssn+"','"+dob+"','"+street+"','"+city+"','"+state+"','"+zip+"','"+insuranceCompany+"','"+plan+"','"+groupNumber+"','"+cardHolder+"','"+signature+"');" ,(err, rows, fiels) => {  
    if (!err) {
      result=1
      console.log(fiels);
    } else {
       result=2
      console.log(err);
    }
  });

  res.render("subscribed", {
    title: "You are subscribed",
    result 
    
  });
 });

module.exports = router;

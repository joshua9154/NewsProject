 var express = require("express");
 var router = express.Router();
 //const async = require("hbs/lib/async");
 const pool = require("../db/db");

// /* GET home page. */
 //router.get("/", function(req, res, next) {
 //  res.render("index", { title: "Express" });
// });

 //router.post("/subscribe", function(req, res, next) {
  // const { name, email } = req.body;
router.get("/", function(req, res, next) {
   res.render("patientPage", { title: "Patient Intake" });
 });
 
 router.post("/Contact", async function(req, res, next) {
   
    res.render("subscribed", {
    title: "You are subscribed",
    result 
    
  });
    });

 router.post("/Subscribe", async function(req, res, next) {
   const { title, firstName, middleInitial, lastName, phone, email, sex, ssn, dob, street, city, state, zip, insuranceCompany, plan, groupNumber, cardHolder, signature } = req.body;
   var result= 0
  
   // 1. Validate the user data
  // 2. Subscribe the user to the mailing list
   // 3. Send a confirmation email
       pool.query("INSERT INTO Patients (title,firstName,middleInitial,lastName,phone,email,sex,ssn,dateOfBirth,street,city,state,zip,insuranceCompany,plan,groupNumber,cardholder,signature) VALUES ('"+title+"','"+firstName+"','"+middleInitial+"','"+lastName+"','"+phone+"','"+email+"','"+sex+"','"+ssn+"','"+dob+"','"+street+"','"+city+"','"+state+"','"+zip+"','"+insuranceCompany+"','"+plan+"','"+groupNumber+"','"+cardHolder+"','"+signature+"');" ,(err, rows, fiels) => {  
   
    if (!err) {
      console.log(rows);
      console.log(fiels);
    } else {
       
      console.log(err);
    }
  });
  
     /*re= await emails(email)
     console.log(re)
    if (re!='[]'){
      result=re;
      
    }*/
     var re='[]'
    while (re=='[]'){
        re= await emails(email)
    }
    result=re
    
    res.render("subscribed", {
    title: "You are subscribed",
    result 
    
  });
  //res.render("subscribed", {
   // title: "You are subscribed",
   // result 
  //  
  //});
 });
 
 async function emails(email){
   
  let myPromise = new Promise(function(resolve, reject) {
    
    pool.query("select id From Patients Where email ='"+email+"';",(err, rows, fiels) => {  
    
     if (!err) {
     result= JSON.stringify(rows)
    // if  (res[3]==undefined){
         console.log(result)
         resolve(result)
    //     }else
         }
    else{
           resolve(err)
        }
         });
 
  });
    
       rest =await myPromise;
       console.log(rest)
       return rest;
}

module.exports = router;

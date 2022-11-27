 var express = require("express");
 var router = express.Router();
 const pool = require("../db/db");
 let request = require('request');


router.get("/", function(req, res, next) {
   res.render("patientPage", { title: "Patient Intake" });
 });
 
 
 router.post("/Contact", async function(req, res, next) {
    const { patientId, title, firstName, middleInitial, lastName, phone, email, sex, dob, street, city, state, zip, relationToPatient, type, emergencyPriority, signature } = req.body;
    var result=1
     
    request.post(
    'https://dzsqyl-8080.preview.csb.app/contacts',
    { json: { 
      "patientId": patientId ,
     "title": title,
     "firstName": firstName,
     "middleInitial": middleInitial,
     "lastName":lastName,
     "phone":phone,
     "email":email,
    "sex":sex,
    "dateOfBirth": dob,
    "street":street,
    "city":city,
    "state":state,
    "zip":zip,
    "relationToPatient":relationToPatient,
    "type":type,
    "emergencyPriority":emergencyPriority,
    "signature":signature
    
    }
    },
    async function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            result="Thank You, your Contact ID is "+body.insertId
              res.render("subscribed", {
             title: "Contact",
              result 
    
               });
        }
        else{
            console.log(body);
            result= JSON.stringify(body)
              res.render("subscribed", {
                 title: "Error",
                  result 
    
  });
        }
    }
);
});

router.post("/Subscribe", async function(req, res, next) {
   const { title, firstName, middleInitial, lastName, phone, email, sex, ssn, dob, street, city, state, zip, insuranceCompany, plan, groupNumber, cardHolder, signature } = req.body;
   var result= 0
   
    request.post(
    'https://dzsqyl-8080.preview.csb.app/patient',
    { json: { 
     "title": title,
     "firstName": firstName,
     "middleInitial": middleInitial,
     "lastName":lastName,
     "phone":phone,
     "email":email,
    "sex":sex,
     "ssn":ssn,
    "dateOfBirth": dob,
    "street":street,
    "city":city,
    "state":state,
    "zip":zip,
    "insuranceCompany": insuranceCompany,
    "plan": plan,
    "groupNumber": groupNumber,
    "cardHolder": cardHolder,
     "medications": {},
     "allergies": {},
     "surgeries": {},
        "familyHistory": { },
        "addictions": { },
        "questionnaire": { },
         "symptoms": {  },
    "signature":signature
    
    }
    },
    async function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            result="Thank You, your Patient ID is "+body.insertId
              res.render("subscribed", {
              title: "Patient",
              result 
    
               });
        }
        else{
            console.log(body);
            result= JSON.stringify(body)
              res.render("subscribed", {
                 title: "Error",
                  result 
    
  });
        }
    }
);
});

/* router.post("/Subscribe", async function(req, res, next) {
   const { title, firstName, middleInitial, lastName, phone, email, sex, ssn, dob, street, city, state, zip, insuranceCompany, plan, groupNumber, cardHolder, signature } = req.body;
   var result= 0
   var insert = ""+title+"','"+firstName+"','"+middleInitial+"','"+lastName+"','"+phone+"','"+email+"','"+sex+"','"+ssn+"','"+dob+"','"+street+"','"+city+"','"+state+"','"+zip+"','"+insuranceCompany+"','"+plan+"','"+groupNumber+"','"+cardHolder+"','"+signature+""
   var re='[]'
    while (re=='[]'){
        re= await insertPatients(insert)
    }
    result=re
    res.render("subscribed", {
    title: "You are subscribed",
    result 
    
  });

 });
 */
 async function emails(email){
   
  let myPromise = new Promise(function(resolve, reject) {
    
    pool.query("select id From Patients Where email ='"+email+"';",(err, rows, fiels) => {  
    
     if (!err) {
     result= JSON.stringify(rows)
 
         console.log(result)
         resolve(result)
  
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



async function insertPatients(insert){
   
  let myPromise = new Promise(function(resolve, reject) {
    
    pool.query("INSERT INTO Patients (title,firstName,middleInitial,lastName,phone,email,sex,ssn,dateOfBirth,street,city,state,zip,insuranceCompany,plan,groupNumber,cardholder,signature) VALUES ('"+insert+"');",(err, rows, fiels) => {  
    
     if (!err) {
        //result= JSON.stringify(rows)
       //  console.log(result)
         console.log(rows.insertId)
         resolve("Thank You, your Patient ID is "+rows.insertId)
  
         }
    else{
           console.log(rows)
           console.log(fiels)
           console.log(err)
           resolve("That Email has already been used")
        }
         });
 
  });
    
       rest =await myPromise;
       console.log(rest)
       return rest;
}


 async function insertContacts(insert){
   
  let myPromise = new Promise(function(resolve, reject) {
    
    pool.query("INSERT INTO Contacts (patientId, title,firstName,middleInitial,lastName,phone,email,sex,dateOfBirth,street,city,state,zip,relationToPatient,type,emergencyPriority,signature) VALUES ('"+insert+"');",(err, rows, fiels) => {  
    
     if (!err) {
     result= JSON.stringify(rows)
         console.log(result)
         console.log(rows.insertId)
         resolve("Thank You, your Contact ID is "+rows.insertId)
  
         }
    else{
           console.log(rows.insertId)
           console.log(fiels)
           console.log(err)
           resolve(err)
        }
         });
 
  });
    
       rest =await myPromise;
       console.log(rest)
       return rest;
}

module.exports = router;

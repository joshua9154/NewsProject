const express = require("express");
const { JSON } = require("mysql/lib/protocol/constants/types");
const router = express.Router();
const pool = require("../db/db");

router.get("/", (req, res) => {
    pool.query("select * from Patients;" ,(err, rows, fiels) => {  
      
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      console.log(err);
    }
  });
});
router.post("/", (req, res) => {
     var patient= req.body
     med= JSON.stringify(patient.medications)
     all=JSON.stringify(patient.allergies)
     sur=JSON.stringify(patient.surgeries)
     que=JSON.stringify(patient.questionnaire)
     sym=JSON.stringify(patient.symptoms)
     fam=JSON.stringify(patient.familyHistory)
     add=JSON.stringify(patient.addictions)
   //   pool.query("INSERT INTO Patient (modifiedAt,email,firstName,lastName,phone,ssn,dateOfBirth,street,city,state,zip,insuranceCompany,plan,groupNumber,medications,surgeries,familyHistory,addictions,questionnaire,signature,middleInitial) VALUES ('2007-05-08 12:35:29.123','"+patient.email+"','"+patient.firstName+"','"+patient.lastName+"','"+patient.phone+"','"+patient.ssn+"','"+patient.dateOfBirth+"','"+patient.street+"','"+patient.city+"','"+patient.state+"','"+patient.zip+"','"+patient.insuranceCompany+"','"+patient.plan+"','"+patient.groupNumber+"','"+patient.medications+"','"+patient.surgeries+"','"+patient.familyHistory+"','"+patient.addictions+"','"+patient.questionnaire+"','"+patient.signature+"','"+patient.middleInitial+"');" ,(err, rows, fiels) => {  
       pool.query("INSERT INTO Patients (title,firstName,middleInitial,lastName,phone,email,sex,ssn,dateOfBirth,street,city,state,zip,insuranceCompany,plan,groupNumber,cardholder,medications,allergies,surgeries,familyHistory,addictions,questionnaire,symptoms,signature) VALUES ('"+patient.title+"','"+patient.firstName+"','"+patient.middleInitial+"','"+patient.lastName+"','"+patient.phone+"','"+patient.email+"','"+patient.sex+"','"+patient.ssn+"','"+patient.dateOfBirth+"','"+patient.street+"','"+patient.city+"','"+patient.state+"','"+patient.zip+"','"+patient.insuranceCompany+"','"+patient.plan+"','"+patient.groupNumber+"','"+patient.cardHolder+"','"+med+"','"+all+"','"+sur+"','"+fam+"','"+add+"','"+que+"','"+sym+"','"+patient.signature+"');" ,(err, rows, fiels) => {  
    if (!err) {
      
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
   //  res.status(201).send("Patient "+patient.firstName+" "+patient.lastName+" has beed added to the patient list.")
  
});

router.put("/", (req, res) => {
    var patient= req.body
     med= JSON.stringify(patient.medications)
     all=JSON.stringify(patient.allergies)
     sur=JSON.stringify(patient.surgeries)
     que=JSON.stringify(patient.questionnaire)
     sym=JSON.stringify(patient.symptoms)
     fam=JSON.stringify(patient.familyHistory)
     add=JSON.stringify(patient.addictions)
   //   pool.query("INSERT INTO Patient (modifiedAt,email,firstName,lastName,phone,ssn,dateOfBirth,street,city,state,zip,insuranceCompany,plan,groupNumber,medications,surgeries,familyHistory,addictions,questionnaire,signature,middleInitial) VALUES ('2007-05-08 12:35:29.123','"+patient.email+"','"+patient.firstName+"','"+patient.lastName+"','"+patient.phone+"','"+patient.ssn+"','"+patient.dateOfBirth+"','"+patient.street+"','"+patient.city+"','"+patient.state+"','"+patient.zip+"','"+patient.insuranceCompany+"','"+patient.plan+"','"+patient.groupNumber+"','"+patient.medications+"','"+patient.surgeries+"','"+patient.familyHistory+"','"+patient.addictions+"','"+patient.questionnaire+"','"+patient.signature+"','"+patient.middleInitial+"');" ,(err, rows, fiels) => {  
         //pool.query("UPDATE Patients SET title='"+patient.title+"',firstName='"+patient.firstName+"',middleInitial='"+patient.middleInitial+"',lastName='"+patient.lastName+"',phone='"+patient.phone+"',email='"+patient.email+"',sex='"+patient.sex+"',ssn='"+patient.ssn+"',dateOfBirth='"+patient.dateOfBirth+"',street='"+patient.street+"',city='"+patient.city+"',state='"+patient.state+"',zip='"+patient.zip+"',insuranceCompany='"+patient.insuranceCompany+"',plan='"+patient.plan+"',groupNumber='"+patient.groupNumber+"',cardHolder='"+patient.cardHolder+"',medications='"+patient.medications+"',surgeries='"+patient.surgeries+"',familyHistory='"+patient.familyHistory+"',addictions='"+patient.addictions+"',questionnaire='"+patient.questionnaire+"',symptoms='"+patient.symptoms+"',signature='"+patient.signature+"' WHERE id = '"+patient.id+"';"  ,(err, rows, fiels) => {  
          //pool.query("INSERT INTO Patients (title,firstName,middleInitial,lastName,phone,email,sex,ssn,dateOfBirth,street,city,state,zip,insuranceCompany,plan,groupNumber,cardholder,medications,allergies,surgeries,familyHistory,addictions,questionnaire,symptoms,signature) VALUES ('"+patient.title+"','"+patient.firstName+"','"+patient.middleInitial+"','"+patient.lastName+"','"+patient.phone+"','"+patient.email+"','"+patient.sex+"','"+patient.ssn+"','"+patient.dateOfBirth+"','"+patient.street+"','"+patient.city+"','"+patient.state+"','"+patient.zip+"','"+patient.insuranceCompany+"','"+patient.plan+"','"+patient.groupNumber+"','"+patient.cardHolder+"','"+med+"','"+all+"','"+sur+"','"+fam+"','"+add+"','"+que+"','"+sym+"','"+patient.signature+"');" ,(err, rows, fiels) => {  
         pool.query("UPDATE Patients SET title='"+patient.title+"',firstName='"+patient.firstName+"',middleInitial='"+patient.middleInitial+"',lastName='"+patient.lastName+"',phone='"+patient.phone+"',email='"+patient.email+"',sex='"+patient.sex+"',ssn='"+patient.ssn+"',dateOfBirth='"+patient.dateOfBirth+"',street='"+patient.street+"',city='"+patient.city+"',state='"+patient.state+"',zip='"+patient.zip+"',insuranceCompany='"+patient.insuranceCompany+"',plan='"+patient.plan+"',groupNumber='"+patient.groupNumber+"',cardHolder='"+patient.cardHolder+"',medications='"+med+"',allergies='"+ all+"',surgeries='"+sur+"',familyHistory='"+fam+"',addictions='"+add+"',questionnaire='"+que+"',symptoms='"+sym+"',signature='"+patient.signature+"' WHERE id = '"+patient.id+"';"  ,(err, rows, fiels) => {  
    
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
   //  res.status(201).send("Patient "+patient.firstName+" "+patient.lastName+" has beed added to the patient list.")
  
});

router.delete('/:id',(req,res,next)=> {
    var thisId = req.params;
   
       pool.query("Delete From Patients Where id ="+thisId.id+";",(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
  //   res.status(201).send("Patient "+thisId.id+" has been deleted from patient list.")
  
});


router.get('/single/:id',(req,res,next)=> {
    var patId = req.params;
   
       pool.query("select * From Patients Where id ="+patId.id+";",(err, rows, fiels) => {  
        
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
  //   res.status(201).send("Patient "+thisId.id+" has been deleted from patient list.")
  
});

router.get('/email/:id',(req,res,next)=> {
    var emailId = req.params;
   
       pool.query("select * From Patients Where email ='"+emailId.id+"';",(err, rows, fiels) => {  
         
    if (rows<1)    {
      res.status(404).send('Patient with email: '+emailId.id+ ' not found.')
       console.log(fiels);
    } 
    else if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
  //   res.status(201).send("Patient "+thisId.id+" has been deleted from patient list.")
  
});

module.exports = router;

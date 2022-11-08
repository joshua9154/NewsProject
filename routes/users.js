const express = require("express");
const router = express.Router();
const pool = require("../db/db");


router.get("/", (req, res) => {
  res.json("Test");
});

router.get("/patient", (req, res) => {
    pool.query("select * from Patient;" ,(err, rows, fiels) => {  
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
      pool.query("INSERT INTO Patient (modifiedAt,email,firstName,lastName,phone,ssn,dateOfBirth,street,city,state,zip,insuranceCompany,plan,groupNumber,medications,surgeries,familyHistory,addictions,questionnaire,signature,middleInitial) VALUES ('2007-05-08 12:35:29.123','"+patient.email+"','"+patient.firstName+"','"+patient.lastName+"','"+patient.phone+"','"+patient.ssn+"','"+patient.dateOfBirth+"','"+patient.street+"','"+patient.city+"','"+patient.state+"','"+patient.zip+"','"+patient.insuranceCompany+"','"+patient.plan+"','"+patient.groupNumber+"','"+patient.medications+"','"+patient.surgeries+"','"+patient.familyHistory+"','"+patient.addictions+"','"+patient.questionnaire+"','"+patient.signature+"','"+patient.middleInitial+"');" ,(err, rows, fiels) => {  

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
   
       pool.query("Delete From Patient Where id ="+thisId.id+";",(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
  //   res.status(201).send("Patient "+thisId.id+" has been deleted from patient list.")
  
});
router.get('/:id',(req,res,next)=> {
    var patId = req.params;
   
       pool.query("select * From Patient Where id ="+patId.id+";",(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
  //   res.status(201).send("Patient "+thisId.id+" has been deleted from patient list.")
  
});

router.post("/contact", (req, res) => {
   var contact= req.body
     
    pool.query("INSERT INTO Contact (modifiedAt,patientId,firstName,lastName,phone,email,dateOfBirth,street,city,state,zip,relationToPatient,type,emergencyPriority,signature) VALUES ('2007-05-08 12:35:29.123',"+contact.patientId+",'"+contact.firstName+"','"+contact.lastName+"','"+contact.phone+"','"+contact.email+"','"+contact.dateOfBirth+"','"+contact.street+"','"+contact.city+"','"+contact.state+"','"+contact.zip+"','"+contact.relationToPatient+"','"+contact.type+"','"+contact.emergencyPriority+"','"+contact.signature+"');" ,(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
     
// res.status(201).send("Contact "+contact.firstName+" "+ contact.lastName +" has been added to the contact list for patient "+contact.patientId) 
});

router.get("/contact", (req, res) => {
   pool.query("select * from Contact;" ,(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      console.log(err);
    }
  });
});

router.get('/contact/:id',(req,res,next)=> {
    var contaId = req.params;
       pool.query("select * From Contact Where contactId ="+contaId.id+";",(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
  //   res.status(201).send("Patient "+thisId.id+" has been deleted from patient list.")
  
});

router.delete('/contact/:id',(req,res,next)=> {
    var conId = req.params;
   
       pool.query("Delete From Contact Where contactId ="+conId.id+";",(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
  });
  
module.exports = router;

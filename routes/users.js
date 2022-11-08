const express = require("express");
const { DATETIME } = require("mysql/lib/protocol/constants/types");
const router = express.Router();
const pool = require("../db/db");


router.get("/", (req, res) => {
  res.json("Hello");
});

router.get("/patient", (req, res) => {
  //mysqlConnection.query("INSERT INTO 'Patient' (createdAt, modifiedAt, email, firstName ) VALUES (now(), now(), 'matt.j.smith@gmail.com', 'Matt')" ,(err, rows, fiels) => {
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
  //mysqlConnection.query("INSERT INTO 'Patient' (createdAt, modifiedAt, email, firstName ) VALUES (now(), now(), 'matt.j.smith@gmail.com', 'Matt')" ,(err, rows, fiels) => {
    const patient= req.body
   // console.log(patient.email)
 
    //pool.query("INSERT INTO Patient (createdAt, modifiedAt, email, firstName ) VALUES  ('2022-11-07T17:33:19.885Z','2022-11-07T17:33:19.000Z','" +patient.email+"','"+patient.firstName+"','"+patient.lastName+"','"+patient.phone+"','"+patient.ssn+"','1971-01-01 00:00:01','"+patient.street+"','"+patient.city+"','"+patient.state+"','"+patient.zip+"','"+patient.insuranceCompany+"','"+patient.plan+"','"+patient.groupNumber+"','"+patient.medications+"','"+patient.surgeries+"','"+patient.familyHistory+"','"+patient.addictions+"','"+patient.questionnaire+"','"+patient.signature+"','"+patient.middleInitial+"');" ,(err, rows, fiels) => {  
    pool.query("INSERT INTO Patient (createdAt, modifiedAt, email, firstName ) VALUES  (\""+ Date.now()+"\",\"2022-11-07T17:33:19.000Z\",\"" +patient.email+"\",\""+patient.firstName+"\");" ,(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      console.log(err);
    }
  });
     res.status(201).send("hi")
  
});
router.post("/contact", (req, res) => {
   const contact= req.body
     
    pool.query("INSERT INTO Contact (modifiedAt,patientId,firstName,lastName,phone,email,dateOfBirth,street,city,state,zip,relationToPatient,type,emergencyPriority,signature) VALUES ('2007-05-08 12:35:29.123',"+contact.patientId+",'"+contact.firstName+"','"+contact.lastName+"','"+contact.phone+"','"+contact.email+"','2007-05-08 12:35:29.123','"+contact.street+"','"+contact.city+"','"+contact.state+"','"+contact.zip+"','"+contact.relationToPatient+"','"+contact.type+"','"+contact.emergencyPriority+"','"+contact.signature+"');" ,(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      console.log(err);
    }
  });
     
 res.status(201).send("Contact "+contact.firstName+" "+ contact.lastName +" has been added to the contact list for patient "+contact.patientId) 
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
module.exports = router;

const express = require("express");
const router = express.Router();
const pool = require("../db/db");


router.post("/", (req, res) => {
   var contact= req.body
     
    pool.query("INSERT INTO Contacts (patientId,title,firstName,middleInitial,lastName,phone,email,sex,dateOfBirth,street,city,state,zip,relationToPatient,type,emergencyPriority,signature) VALUES ('"+contact.patientId+"','"+contact.title+"','"+contact.firstName+"','"+contact.middleInitial+"','"+contact.lastName+"','"+contact.phone+"','"+contact.email+"','"+contact.sex+"','"+contact.dateOfBirth+"','"+contact.street+"','"+contact.city+"','"+contact.state+"','"+contact.zip+"','"+contact.relationToPatient+"','"+contact.type+"','"+contact.emergencyPriority+"','"+contact.signature+"');" ,(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
     
// res.status(201).send("Contact "+contact.firstName+" "+ contact.lastName +" has been added to the contact list for contact "+contact.patientId) 
});
router.put("/", (req, res) => {
    var contact= req.body
   //   pool.query("INSERT INTO Patient (modifiedAt,email,firstName,lastName,phone,ssn,dateOfBirth,street,city,state,zip,insuranceCompany,plan,groupNumber,medications,surgeries,familyHistory,addictions,questionnaire,signature,middleInitial) VALUES ('2007-05-08 12:35:29.123','"+contact.email+"','"+contact.firstName+"','"+contact.lastName+"','"+contact.phone+"','"+contact.ssn+"','"+contact.dateOfBirth+"','"+contact.street+"','"+contact.city+"','"+contact.state+"','"+contact.zip+"','"+contact.insuranceCompany+"','"+contact.plan+"','"+contact.groupNumber+"','"+contact.medications+"','"+contact.surgeries+"','"+contact.familyHistory+"','"+contact.addictions+"','"+contact.questionnaire+"','"+contact.signature+"','"+contact.middleInitial+"');" ,(err, rows, fiels) => {  
       pool.query("UPDATE Contacts SET patientId ='"+ contact.patientId+"',title='"+contact.title+"',firstName='"+contact.firstName+"',middleInitial='"+contact.middleInitial+"',lastName='"+contact.lastName+"',phone='"+contact.phone+"',email='"+contact.email+"',sex='"+contact.sex+"',dateOfBirth='"+contact.dateOfBirth+"',street='"+contact.street+"',city='"+contact.city+"',state='"+contact.state+"',zip='"+contact.zip+"',relationToPatient='"+contact.relationToPatient+"',type='"+contact.type+"',emergencyPriority='"+contact.emergencyPriority+"',patientId='"+contact.patientId+"',signature='"+contact.signature+"' WHERE contactId = '"+contact.contactId+"';"  ,(err, rows, fiels) => {  

    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
   //  res.status(201).send("Patient "+contact.firstName+" "+contact.lastName+" has beed added to the contact list.")
  
});



router.get('/patient/:id',(req,res,next)=> {
    var contactId = req.params;
       pool.query("select * From Contacts Where patientId ="+contactId.id+";",(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
  //   res.status(201).send("Patient "+thisId.id+" has been deleted from contact list.")
  
});
router.get('/single/:id',(req,res,next)=> {
    var contatId = req.params;
       pool.query("select * From Contacts Where contactId ="+contatId.id+";",(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
  //   res.status(201).send("Patient "+thisId.id+" has been deleted from contact list.")
  
});

router.get('/all/',(req,res,next)=> {
       pool.query("select * From Contacts ;",(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
  //   res.status(201).send("Patient "+thisId.id+" has been deleted from contact list.")
  
});

router.delete('/:id',(req,res,next)=> {
    var conId = req.params;
   
       pool.query("Delete From Contacts Where contactId ="+conId.id+";",(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
  });
  
module.exports = router;
const express = require("express");
const router = express.Router();
const pool = require("../db/db");


router.post("/", (req, res) => {
   var contact= req.body
       if (validateContact(contact)=="ok"){
    pool.query("INSERT INTO Contacts (patientId,title,firstName,middleInitial,lastName,phone,email,sex,dateOfBirth,street,city,state,zip,relationToPatient,type,emergencyPriority,signature) VALUES ('"+contact.patientId+"','"+contact.title+"','"+contact.firstName+"','"+contact.middleInitial+"','"+contact.lastName+"','"+contact.phone+"','"+contact.email+"','"+contact.sex+"','"+contact.dateOfBirth+"','"+contact.street+"','"+contact.city+"','"+contact.state+"','"+contact.zip+"','"+contact.relationToPatient+"','"+contact.type+"','"+contact.emergencyPriority+"','"+contact.signature+"');" ,(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
    }else{
         res.status(400).send(validateContact(contact))
     }
     
// res.status(201).send("Contact "+contact.firstName+" "+ contact.lastName +" has been added to the contact list for contact "+contact.patientId) 
});
router.put("/", (req, res) => {
    var contact= req.body
     if (validateContact(contact)=="ok"){
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
     }else{
         res.status(400).send(validateContact(contact))
     }
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
  
  function validateContact(contact) {
  //result="ok"
  if(validateTitle(contact.title)){
    return "Please use titles Dr, Mr, Mrs, Ms or Miss not "+ contact.title+"."
  }
  if(validateType(contact.type)){
    return "Please use types Guardian, Family, Freind, Family, Doctor, or Pharmacy not "+ contact.type+"."
  }
   if(validateGuardian(contact)){
    return "Please make sure all attributes all filled out for Guardian."
  }
   if(validateFamily(contact)){
    return "Please make sure all attributes all filled out for Family."
  }
  if(validateFreind(contact)){
    return "Please make sure all attributes all filled out for Freind."
  }
  if(validateDoctor(contact)){
    return "Please make sure all attributes all filled out for Doctor."
  }
  if(validatePharmacy(contact)){
    return "Please make sure all attributes all filled out for Pharmacy."
  }
  if(validateId(contact.patientId)){
   return "Please use a real patientId not "+ contact.patientId+"."
   }
  if(validateMiddleInitial(contact.middleInitial)){
   return "Please use a single letter for middle initial not "+ contact.middleInitial+"."
   }
   if(validateLetters(contact.firstName)){
   return "Please use only letters in firstName "+ contact.firstName+"."
   }
   if(validateLetters(contact.lastName)){
   return "Please use only letters in lastName "+ contact.lastName+"."
   }
    if(validatePhone(contact.phone)){
   return "Please use only numbers in phone not "+ contact.phone+"."
   }
     if(validateEmail(contact.email)){
   return "Please use only valid email addresses not "+ contact.email+"."
   }
    if(validateSex(contact.sex)){
   return "Please use only male and female for sex not "+ contact.sex+"."
   }
    if(validateZip(contact.zip)){
   return "Please use a five diget number for zip not "+ contact.zip+"."
   }
    if(validateState(contact.state)){
   return "Please use two letters for state not "+ contact.state+"."
   }
    if(validateCity(contact.city)){
   return "Please use only letters for city not "+ contact.city+"."
   }
    if(validateStreet(contact.street)){
   return "Please use only valid street adresses not "+ contact.street+"."
   }
     if(validateDob(contact.dateOfBirth)){
   return "Please use only valid date of births not "+ contact.dateOfBirth+"."
   }
    if(validateLetters(contact.relationToPatient)){
   return "Please use only use letters in relation to patient not "+ contact.relationToPatient+"."
   }
   
   
    if(validateLetters(contact.signature)){
   return "Please use only use letters in signature not "+ contact.signature+"."
   }
     if(validatePhone(contact.emergencyPriority)){
   return "Please use only use numbers in emergency priority not "+ contact.emergencyPriority+"."
   }
  return  "ok"
}

function validateId(patientId) {
    if(patientId == ""){
     return true
   }
   result=false
  
   pool.query("select * From Patients Where id ="+patientId+";",(err, rows, fiels) => {  
      if (rows<1){
        result=true
      }
     if (!err) {
     
      console.log(fiels);
    } else {
      
      console.log(err);
    }
   
     });
   return result
}

function validateDob(dob) {
  
     if(dob == ""){
     return true
   }
   return false
}
function validateStreet(street) {
  
     if(street == ""){
     return true
   }
   return false
}
function validateCity(city) {
  
    if(!(/^[A-Za-z\s]*$/.test(city))){
     return true
   }
     if(city == ""){
     return true
   }
   return false
}

function validateState(state) {
  
    if(!(/^[a-zA-Z]+$/.test(state))){
     return true
   }
   if(state.length !=2){
     return true
   }
     if(state == ""){
     return true
   }
   return false
}

function validateZip(zip) {
  
    if(!(/^[0-9]+$/.test(zip))){
     return true
   }
   if(zip.length !=5){
     return true
   }
     if(zip == ""){
     return true
   }
   
   return false
}

function validateSex(sex) {
   input= sex.toLowerCase();
    if(input==""){
     return false
   }
   if(input=="male"){
     return false
   }
   if(input=="female"){
     return false
   }
  
  return true
}

function validateEmail(email) {
  
   
   if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
  {
    return true
  }
   return false
}

function validatePhone(phone) {
  
    if(!(/^[0-9]+$/.test(phone))){
     return true
   }
   return false
}


function validateLetters(word) {
  
    if(!(/^[a-zA-Z]+$/.test(word))){
     return true
   }
   return false
}

function validateMiddleInitial(middleInitial) {
   
    if(middleInitial.length >1){
     return true
   }
    if(!(/^[a-zA-Z]+$/.test(middleInitial))){
     return true
   }
   return false
}



function validatePharmacy(contact) {
   
    if(contact.type.toLowerCase()!= "pharmacy"){
     return false
   }
  return false
}

function validateDoctor(contact) {
   
    if(contact.type.toLowerCase()!= "doctor"){
     return false
   }
   if(contact.lastName==""){
     return true
   }
  return false
}


function validateFreind(contact) {
   
    if(contact.type.toLowerCase()!= "freind"){
     return false
   }
   if(contact.lastName==""){
     return true
   }
  return false
}

function validateFamily(contact) {
   
    if(contact.type.toLowerCase()!= "family"){
     return false
   }
    if(contact.title== ""){
     return true
   }
   if(contact.lastName==""){
     return true
   }
   if(contact.sex==""){
     return true
   }
   if(contact.dateOfBirth==""){
     return true
   }
   if(contact.relationToPatient==""){
     return true
   }
   if(contact.emergencyPriority==""){
     return true
   }
  return false
}
function validateGuardian(contact) {
   
    if(contact.type.toLowerCase()!= "guardian"){
     return false
   }
    if(contact.title== ""){
     return true
   }
   if(contact.lastName==""){
     return true
   }
   if(contact.sex==""){
     return true
   }
   if(contact.dateOfBirth==""){
     return true
   }
   if(contact.relationToPatient==""){
     return true
   }
   if(contact.emergencyPriority==""){
     return true
   }
    if(contact.signature==""){
     return true
   }
  return false
}


function validateType(type) {
   input= type.toLowerCase();
    if(input==""){
     return true
   }
    if(input=="guardian"){
     return false
   }
   if(input=="family"){
     return false
   }
   if(input=="freind"){
     return false
   }
   if(input=="doctor"){
     return false
   }
   if(input=="pharmacy"){
     return false
   }
  return true
}

function validateTitle(title) {
   input= title.toLowerCase();
    if(input==""){
     return false
   }
   if(input=="mr"){
     return false
   }
   if(input=="mrs"){
     return false
   }
   if(input=="ms"){
     return false
   }
   if(input=="miss"){
     return false
   }
    if(input=="dr"){
     return false
   }
  return true
}

  
module.exports = router;
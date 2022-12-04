const express = require("express");
const async = require("hbs/lib/async");
const { DATETIME2 } = require("mysql/lib/protocol/constants/types");
//const { DATETIME, DATETIME2 } = require("mysql/lib/protocol/constants/types");
//const async = require("hbs/lib/async");
//const { JSON } = require("mysql/lib/protocol/constants/types");
const router = express.Router();
const pool = require("../db/db");

router.get("/", (req, res) => {
    pool.query("select * from Patients;" ,(err, rows, fiels) => {  
       data=JSON.stringify(rows)
       data= data.replace(/\\/g, '');
       data2 = data.replace(/"{/g, `{`)
       data3 = data2.replace(/}"/g, `}`)
       result= JSON.parse(data3)
    
    
    if (!err) {
        res.send(result)
     // res.json(rows);
      console.log(fiels);
    } else {
      console.log(err);
    }
  });
});
router.post("/", async (req, res) => {
     var patient= req.body
    // console.log(patient)
   //  med=JSON.stringify(patient.medications)
    // all=JSON.stringify(patient.allergies)
   //  sur=JSON.stringify(patient.surgeries)
   //  que=JSON.stringify(patient.questionnaire)
   //  sym=JSON.stringify(patient.symptoms)
   //  fam=JSON.stringify(patient.familyHistory)
   //  add=JSON.stringify(patient.addictions)
    result = await validatePatient(patient)
    if ( result=="ok"){
     med=JSON.stringify(patient.medications)
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
    }
     else{
      res.status(400).send(result)
    }
});

router.put("/", async  (req, res) => {
    var patient= req.body
     result= await validatePatient(patient);
    if (result=="ok"){
     med=JSON.stringify(patient.medications)
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
    }
    else{
      res.status(400).send(result)
    }
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
         
         if (rows<1)    {
      res.status(404).send('Patient with ID: '+patId.id+ ' not found.')
       console.log(fiels);
    }  else if (!err) {
          data=JSON.stringify(rows)
       data= data.replace(/\\/g, '');
       data2 = data.replace(/"{/g, `{`)
       data3 = data2.replace(/}"/g, `}`)
       result= JSON.parse(data3)
        
    
        res.send(result)
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
      data=JSON.stringify(rows)
       data= data.replace(/\\/g, '');
       data2 = data.replace(/"{/g, `{`)
       data3 = data2.replace(/}"/g, `}`)
       result= JSON.parse(data3)
       res.send(result)
      console.log(fiels);
    } else {
      
      console.log(err);
    }
  });
  //   res.status(201).send("Patient "+thisId.id+" has been deleted from patient list.")
  
});
 async function validatePatient(contact) {
  //result="ok"
  
  if(validateTitle(contact.title)){
    return "Please use titles Dr, Mr, Mrs, Ms or Miss not "+ contact.title+"."
  }
  if(validateMiddleInitial(contact.middleInitial)){
   return "Please use a single letter for middle initial not "+ contact.middleInitial+"."
   }
   if(validateLettersNotNull(contact.firstName)){
   return "Please use only letters in firstName "+ contact.firstName+"."
   }
   if(validateLettersNotNull(contact.lastName)){
   return "Please use only letters in lastName "+ contact.lastName+"."
   }
    if(validatePhone(contact.phone)){
   return "Please use only numbers in phone not "+ contact.phone+"."
   }
    var result= await emails(contact.email);
     
    if(result){
   return "Please use only valid email addresses and not a taken one, not "+ contact.email+"."
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
 //   if(validateLetters(contact.relationToPatient)){
 //  return "Please use only use letters in relation to patient not "+ contact.relationToPatient+"."
//   }
    if(validateLettersNotNull(contact.signature)){
   return "Please use only use letters in signature not "+ contact.signature+"."
   }
     if(validateSSN(contact.ssn)){
   return "Please use only use proper ss format not "+ contact.ssn+"."
   }
   if(validateLetters(contact.plan)){
   return "Please use only use letters in plan not "+ contact.plan+"."
   }
   if(validateLetters(contact.cardHolder)){
   return "Please use only use letters in cardHolder not "+ contact.cardHolder+"."
   }
    if(validateLetters(contact.insuranceCompany)){
   return "Please use only use letters in insuranceCompany not "+ contact.insuranceCompany+"."
   }
   if(validateNumber(contact.groupNumber)){
   return "Please use only use numbers in group number not "+ contact.groupNumber+"."
   }
  return  "ok"
}

function validateSSN(ssn) {
  
    if(!(/^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/.test(ssn))){
     return true
   }
   return false
}


function validateDob(dob) {
  
     if(dob == ""){
     return true
   }
   if(dob.match(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2}).(\d{3})/)){
     return false
   }
    if(dob.match(/(\d{4})-(\d{2})-(\d{2})/)){
     return false
   }
   // if(!(/^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/.test(dob))){
   //  return true
  // }
   return true
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
   
   
  async function emails(email){
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
  {
    return true
  }
   
  let myPromise = new Promise(function(resolve, reject) {
    
    pool.query("select * From Patients Where email ='"+email+"';",(err, rows, fiels) => {  
    
     if (!err) {
     res= JSON.stringify(rows)
     if  (res[3]==undefined){
       
         resolve(false)
         }else
         {

           resolve(true)
         }
         }
    else{
          
        }
         });
 
  });
    
       rest =await myPromise;
       console.log(rest)
       return rest;
}

function validateNumber(phone) {
  
    if(!(/^[0-9]+$/.test(phone))){
     return true
   }
   
     if(phone== ""){
     return true
   }
   return false
}

function validatePhone(phone) {
  
    if(!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone))){
     return true
   }
   
     if(phone== ""){
     return true
   }
   return false
}


function validateLetters(word) {
  
    if(!(/^[A-Za-z\s]*$/.test(word))){
     return true
   }
   return false
}

function validateLettersNotNull(word) {
  
    if(!(/^[A-Za-z\s]*$/.test(word))){
     return true
   }
    if(word==""){
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

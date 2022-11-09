var express = require("express");
var router = express.Router();


var dict1 = [{
  contactId:211111,
  createdAt: "1970-01-01 00:00:01",
  modifiedAt: "1971-01-01 00:00:01",
  patientId:111111,
  firstName: "Sarah",
  middileInitial: "J",
  lastName: "Smith",
  email: "Sarah.smith@gmail.com",
  phone: 7325104789,
  dateOfBirth: "1961-01-01 00:00:01",
  street: "323 Dr Martin Luther King Jr Blvd",
  city: "Newark",
  state: "NJ",
  zip: "07102",
  type: "Guardian",
  relationToPatient: "Mother",
  signature: "Sarah Smith"
},
 {
  contactId:211112,
  createdAt: "1970-01-01 00:00:01",
  modifiedAt: "1971-01-01 00:00:01",
  patientId:111111,
  firstName: "Mark",
  middileInitial: "J",
  lastName: "Smith",
  email: "Mark.smith@gmail.com",
  phone: 7325104789,
  dateOfBirth: "1961-01-01 00:00:01",
  street: "323 Dr Martin Luther King Jr Blvd",
  city: "Newark",
  state: "NJ",
  zip: "07102",
  type: "Family",
  relationToPatient: "Brother",
  signature: "Mark Smith"
}];
//var dictstring1 = JSON.stringify(dict1);
//var dictstring2 = JSON.stringify(dict2);
//var dictArray= dictstring1+dictstring2
/* GET users listing. */

//router.get("/", function (req, res, next) {
//  res.send(dictstring1);
//});

router.get('/:id',(req,res,next)=> {
    const {id} = req.params;
    const patient = dict1.find((patient) => patient.contactId === Number(id));
    if (patient) res.status(200).send(JSON.stringify(patient));
    else res.status(404).send('Not Found')
});
router.post('/',(req,res)=>{
    const patient= req.body
    dict1.push(patient)
    res.status(201).send('Created Contact')
})
router.delete('/:id',(req,res,next)=> {
    const {id} = req.params;
    const patient = dict1.find((patient) => patient.contactId === Number(id));
    if (patient) res.status(200).send("Contact with ID "+id+" has been deleted");
    else res.status(404).send('Not Found')
});
router.put('/:id',(req,res,next)=> {
    const {id} = req.params;
    const patient = dict1.find((patient) => patient.contactId === Number(id));
    if (patient) res.status(200).send("Contact with ID "+id+" has been updated");
    else res.status(404).send('Not Found')
})

module.exports = router;
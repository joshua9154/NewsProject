var express = require("express");
var router = express.Router();

var dict = {
  one: [1],
  two: [34, 3.3]
};
var dict1 = [{
  id:111111,
  createdAt: "1970-01-01 00:00:01",
  modifiedAt: "1971-01-01 00:00:01",
  email: "matt.smith@gmail.com",
  firstName: "Matt",
  middileInitial: "J",
  lastName: "Smith",
  phone: 7325104789,
  ssn: "123-456-7890",
  dateOfBirth: "1961-01-01 00:00:01",
  street: "323 Dr Martin Luther King Jr Blvd",
  city: "Newark",
  state: "NJ",
  zip: "07102",
  insuranceCompany: "Blue Cross",
  insuranceId: "Q1234678",
  plan: "POS II",
  groupNumber: 12345601078910,
  medications: ["Peanuts", "Pollen"],
  surgeries: ["Surgery on left Tibia", "Tonsils Removed"],
  familyHistory: ["High cholesterol", "High blood pressure"],
  addictions: ["Opiods", "Alcohol"],
  questionnaire: ["Yes", "No"],
  contacts: [122233333],
  signature: "Matt Smith"
},
 {
  id:22222222,
  createdAt: "1970-01-01 00:00:01",
  modifiedAt: "1971-01-01 00:00:01",
  email: "joe.smith@gmail.com",
  firstName: "Joe",
  middileInitial: "J",
  lastName: "Smith",
  phone: 7325104789,
  ssn: "123-456-7890",
  dateOfBirth: "1961-01-01 00:00:01",
  street: "323 Dr Martin Luther King Jr Blvd",
  city: "Newark",
  state: "NJ",
  zip: "07102",
  insuranceCompany: "Blue Cross",
  insuranceId: "Q1234678",
  plan: "POS II",
  groupNumber: 12345601078910,
  medications: ["Peanuts", "Pollen"],
  surgeries: ["Surgery on left Tibia", "Tonsils Removed"],
  familyHistory: ["High cholesterol", "High blood pressure"],
  addictions: ["Opiods", "Alcohol"],
  questionnaire: ["Yes", "No"],
  contacts: [122233333],
  signature: "Joe Smith"
}];
var dictstring1 = JSON.stringify(dict1);
//var dictstring2 = JSON.stringify(dict2);
//var dictArray= dictstring1+dictstring2
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(dictstring1);
});

router.get('/:id',(req,res,next)=> {
    const {id} = req.params;
    const patient = dict1.find((patient) => patient.id === Number(id));
    if (patient) res.status(200).send(JSON.stringify(patient));
    else res.status(404).send('Not Found')
});
router.post('/',(req,res)=>{
    const patient= req.body
    dict1.push(patient)
    res.status(201).send('Created Patient')
})


module.exports = router;

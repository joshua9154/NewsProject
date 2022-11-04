var express = require("express");
var router = express.Router();

var dict = {
  one: [1],
  two: [34, 3.3]
};
var dict2 = {
  id: 111111,
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
};
var dictstring = JSON.stringify(dict2);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(dictstring);
});

module.exports = router;

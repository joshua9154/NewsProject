var express = require("express");
var router = express.Router();

var dict = {
  one: [14, 4.5],
  two: [34, 3.3],
  three: [67, 5.0],
  four: [32, 4.1]
};
var dictstring = JSON.stringify(dict);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(dictstring);
});

module.exports = router;

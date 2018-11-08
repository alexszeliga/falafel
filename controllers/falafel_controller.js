var express = require("express");
var falafel = require("../models/falafel");

var router = express.Router();

// import falafel model

var falafel = require(`../models/falafel.js`);

router.get("/", (req, res) => {
  falafel.all(data => {
    var hbsObject = { falafel: data };
    res.render("index", hbsObject);
  });
});

module.exports = router;

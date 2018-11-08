var express = require("express");
var falafel = require("../models/falafel");

var router = express.Router();

// import falafel model

var falafel = require(`../models/falafel.js`);

router.get("/", (req, res) => {
  console.log("router GET");
  falafel.all(data => {
    var hbsObject = { falafel: data };
    res.render("index", hbsObject);
  });
});

router.post("/api/falafel", (req, res) => {
  console.log("router POST");
  // the problem with these contrived examples and explicit instructions
  // is that because everything is just called 'falafel'
  // I can't use object destructuring here, which results in less
  // semantic code and bad habits. Good thing I'm paying attention.
  // https://tinyurl.com/y8uemrnv
  falafel.create(
    ["falafel_name", "devoured"],
    [req.body.falafel, req.body.devoured],
    response => {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/falafel/:id", (req, res) => {
  var condition = `id = ${req.params.id}`;
  console.log("router PUT");
  falafel.update({ devoured: req.body.devoured }, condition, response => {
    if (response.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;

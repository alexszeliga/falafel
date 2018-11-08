var orm = require("../config/orm");

var falafel = {
  all: function(cb) {
    orm.selectAll("falafel", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.createOne("falafel", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, devoured, cb) {
    orm.updateOne("falafel", objColVals, devoured, function(res) {
      cb(res);
    });
  }
};

module.exports = falafel;

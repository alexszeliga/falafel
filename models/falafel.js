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
  // updated from copy/pasta: there was an argument before the cb for devoured.
  // if you're having issues updating that, consider looking here
  update: function(objColVals, condition, cb) {
    orm.updateOne("falafel", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = falafel;

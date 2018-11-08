// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];

    // if prop isn't inherited
    if (Object.hasOwnProperty.call(ob, key)) {
      // if prop is a string and has a space character in it
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        //pre and app-pend it with a quote mark so it's json-able
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  console.log(arr.toString());
  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
    console.log("ORM selectAll");
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  createOne: function(table, cols, vals, cb) {
    console.log("ORM createOne");
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    // console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function(table, objColVals, condition, cb) {
    console.log("ORM updateOne");
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    // console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (falafel.js).
module.exports = orm;

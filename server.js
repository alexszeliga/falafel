var express = require("express");

var PORT = process.env.PORT || 8001;

var app = express();

// public routes
app.use(express.static("public"));

// Config express to parse http body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/falafel_controller.js");

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

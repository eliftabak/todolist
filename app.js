const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');

const items = ["Go to the Gym 👟", "Study 1 Hour 👩🏻‍💻", "Cook for dinner 🥘"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  const day = date.getDate();

  res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res){
  const item= req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});

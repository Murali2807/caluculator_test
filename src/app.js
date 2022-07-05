const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();

const publicDir = path.join(__dirname, "../public");
const templateDir = path.join(__dirname, "../template/views");
const includesDir = path.join(__dirname, "../template/includes");
const PORT_URL = process.env.PORT || 3000;

app.set("view engine", "hbs");
app.set("views", templateDir);
hbs.registerPartials(includesDir);
app.use(express.static(publicDir));
app.get("/", (req, res) => {
  res.render("index", {
    createrName: "MURALITHARAN",
    copyrightsYear: 2022
  });
});
app.get("/about", (req, res) => {
  res.render("about", {});
});
app.get("*", (req, res) => {
  res.send("404 : Page not found");
});

app.listen(PORT_URL, (err, result) => {
  console.log("Listening");
});

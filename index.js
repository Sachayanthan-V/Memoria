const express = require("express");
const app = express();
const PORT = 7000;
const routes = require("./routes");
const expresslayouts = require('express-ejs-layouts');

app.use(express.static("./assets"));

app.use(expresslayouts);
app.set("layout extractStyles", true); 
app.set("layout extractScripts", true);

app.set("view engine", "ejs"); 
app.set("views", "./views");
app.use("/", routes);

app.listen(PORT, function (err) {
  if (err) {
    console.log(`Error connecting to the PORT :: ${PORT}`);
  }
  console.log(`App is up and running in PORT :: ${PORT}`);
});

const express = require('express');
const app = express();
const PORT = 7000;
const routes = require('./routes');


app.use(express.urlencoded());
app.use("/", routes);

app.listen(PORT, function(err){
    if(err) {console.log(`Error connecting to the PORT :: ${PORT}`)}
    console.log(`App is up and running in PORT :: ${PORT}`);
});
const express = require("express");
const router = require("./routes/mobileroute")
var Book = require('./database-mongo');
//const cors=require("cors")
const app = express();
const PORT = process.env.PORT || 3001

//app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/mobiles", router);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});

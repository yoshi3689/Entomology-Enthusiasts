// go to the "server" directory and "npm start"
// will start the server

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const MONGOOSE_URI = "mongodb+srv://Yoshi:yoshi1234@cluster0.zdgk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = 5000;

const bodyParser = require("body-parser");
// const cors = require("cors");
const morgan = require("morgan");

// sets the view engine to ejs
app.set("view engine", "ejs");

// setting the limit for the file size accepted for the request body
app.use(bodyParser.json({ limit: "25mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "25mb", extended: true }));

// serving the files from the folder "views", 
// (serves a different file depending on the user's current directory)
app.use(express.static("views"));
app.use(express.static("scripts"));
app.use(express.static("styles"));


// logging out every request details
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.render("index.ejs");
  res.send("index.js");
  res.send("styles.css");
})

// app.get('/',(req, res) => {
//   console.log("hey");
//   // the second parameter can be accessed in the index.ejs
//   res.render("index", {text: "you are amazing"});
// })

// Connect to the database, then start the server.
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
  .catch((err) => console.log(err));


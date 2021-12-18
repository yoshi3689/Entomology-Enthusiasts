// go to the "server" directory and "npm start"
// will start the server

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const MONGOOSE_URI = "mongodb+srv://Yoshi:yoshi1234@cluster0.zdgk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = 5000;

const bodyParser = require("body-parser");
const morgan = require("morgan");

// sets the view engine to ejs
// app.set("view engine", "ejs");

// logging out every request details
app.use(morgan("common"));

// setting the limit for the file size accepted for the request body
app.use(bodyParser.json({ limit: "25mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "25mb", extended: true }));

// serving the files from the folder "views", 
// (serves a different file depending on the user's current directory)
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/index.html"));
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/views/index.html"));
// });


app.post("/matchfind", (req, res) => {
  // reciving the below from the client (forms on index.html)
  // req.quantity
  // req.isRipe
  
  // 
})

// Connect to the database, then start the server.
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
  .catch((err) => console.log(err));


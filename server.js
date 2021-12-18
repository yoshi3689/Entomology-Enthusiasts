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

// setting the limit for the file size accepted for the request body
app.use(bodyParser.json({ limit: "25mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "25mb", extended: true }));

app.use(express.static(path.join(__dirname, "/views")));

// logging out every request details
app.use(morgan("common"));

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
  .catch((err) => console.log(err));

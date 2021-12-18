// To start server with nodemon, type "npm run devStart" in your terminal/cmd
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const MONGOOSE_URI = "mongodb+srv://Yoshi:yoshi1234@cluster0.zdgk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = 5000;

const bodyParser = require("body-parser");
const morgan = require("morgan");

const userRouter = require("./routes/users");
const User = require("./models/User");

// setting the limit for the file size accepted for the request body
// app.use(bodyParser.json({ limit: "25mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "25mb", extended: true }));

// sets the view engine to ejs
// app.set("view engine", "ejs");

// logging out every request details
app.use(morgan("common"));
app.use("/user", userRouter);


app.use(express.json());
app.use(express.urlencoded({extended: true}))


// serving the files from the folder "views", 
// (serves a different file depending on the user's current directory)
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/login.html"));
});

app.post("/login", async (req, res) => {
  const { username, bd } = req.body.username;
  console.log(req.body.username, "username: " + username, "bd: " + bd);
  
  // find the user that has the same username
  const user = await User.findOne(username);

  // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples
  if (!user) {
    try {
      console.log("the item not found, so we'll add this item");
      const newUser = new User({
        id: 0,
        username: "",
        bd: "",
        location: {
          x: 0,
          y: 0
        },
        mostRecent: null
      });
      newUser.save().then(() => {
        console.log("new user added", newUser.username);
      });
    } catch(err) {
      console.log(err);
    }
  } else {
    console.log("user found", username);
    res.send(req.body);
    res.redirect();
  }
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/views/index.html"));
// });


app.post("/matchfind", (req, res) => {
  // reciving the below from the client (forms on index.html)
  // req.quantity
  // req.isRipe
  
  // response being a file
})

// Connect to the database, then start the server.
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
  .catch((err) => console.log(err));


// To start server with nodemon, type "npm run devStart" in your terminal/cmd
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const MONGOOSE_URI = "mongodb+srv://Yoshi:yoshi1234@cluster0.zdgk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const bodyParser = require("body-parser");
const morgan = require("morgan");

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples

const userRouter = require("./routes/users");
const User = require("./models/User");

const Seek = require("./models/Seek");
const Give = require("./models/Give");

app.set("view engine", "ejs");

app.use(express.static("./public"));

// logging out every request details
app.use(morgan("common"));
app.use("/user", userRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post("/login", async (req, res) => {
  // console.log(req.body.username, req.body.password);
  const { username, password } = req.body;
  // find the user that has the same username
  const user = await User.findOne({ username });

  if (user && user.password !== password) { // User exists, wrong password; send success: false
    console.log("Wrong password.");
    res.status(400).json({ success: false });
  } else if (!user) { // Create new user; send success: true
    try {
      console.log("Creating new user.");
      const newUser = new User({
        username,
        password,
        location: {
          x: 0,
          y: 0
        },
        mostRecent: null
      });
      newUser.save().then(() => {
        console.log("New user added", newUser.username);
        res.status(200).json({ success: true });
      });
    } catch (err) {
      console.log(err);
    }
  } else { //user exists, password correct; send success: true
    console.log("User found: ", username);
    res.status(200).json({ success: true });
  }
});

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/public/views/login.ejs"))
});


app.get("/home", (req, res) => {
  res.render(path.join(__dirname, "/public/views/index.ejs"));
});

app.route("/avomatcho") // index.js posts to db, match.js gets from db
  .post((req, res) => {
    const { seek, quantity, location, ripeness, exchange } = req.body;
    console.log(req.body);
    res.send(req.body);
  })
  // .get((req, res) => {
  // res.render(path.join(__dirname, "public/views/match.ejs"));
  // });

// Connect to the database, then start the server.
const PORT = 5000;
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
  .catch((err) => console.log(err));


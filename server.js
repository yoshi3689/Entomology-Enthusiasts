// To start server with nodemon, type "npm run devStart" in your terminal/cmd
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const MONGOOSE_URI = "mongodb+srv://Yoshi:yoshi1234@cluster0.zdgk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const bodyParser = require("body-parser");
const morgan = require("morgan");

const userRouter = require("./routes/users");
const User = require("./models/User");

app.use(express.static("./public"));

// logging out every request details
app.use(morgan("common"));
app.use("/user", userRouter);

app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.post("/login", async (req, res) => {
  const { username, bd } = req.body;
  console.log("username: " + username, "bd: " + bd);
  
  // find the user that has the same username
  const user = await User.findOne(username);

  // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples
  if (!user) {
    try {
      console.log("Creating new user.");
      const newUser = new User({
        id: 0,
        username: username,
        bd: bd,
        location: {
          x: 0,
          y: 0
        },
        mostRecent: null
      });
      // Create new user, redirect to home page
      newUser.save().then(() => {
        console.log("New user added", newUser.username);
        res.redirect("/home");
      });
    } catch(err) {
      console.log(err);
    }
  } else {
    console.log("User found: ", username);
    // res.send(req.body);
    res.redirect("/home");
  }
});



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/views/login.html"));
});


app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/views/index.html"));
});


app.route("/avomatcho")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "public/views/match.html"));
  })
  .post((req, res) => {
  // reciving the below from the client (forms on index.html)
  // req.quantity
  // req.isRipe
  
  // response being a file
  });


// Connect to the database, then start the server.
const PORT = 5000;
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
  .catch((err) => console.log(err));


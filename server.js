// To start server with nodemon, type "npm run devStart" in your terminal/cmd
const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const MONGOOSE_URI = "mongodb+srv://Yoshi:yoshi1234@cluster0.zdgk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

// logging out every request details
app.use(morgan("common"));

// Chat feature
// const http = require("http").Server(app);
// const io = require("socket.io")(http);

app.use(express.static("./public"));

// https://stackoverflow.com/questions/27961320/when-should-i-use-cookie-parser-with-express-session
app.use(session({
  secret: "avocado farming uses a lot of water",
  name: "avoCookie",
  resave: false,
  saveUninitialized: true
}));

// Routes
const userRouter = require("./routes/users");
app.use("/user", userRouter);

// MongoDB/mongoose Schema
const User = require("./models/User");
const Seek = require("./models/Seek");
const Give = require("./models/Give");

app.post("/login", async (req, res) => {
  // console.log(req.body.username, req.body.password);
  const {
    username,
    password
  } = req.body;
  // find the user that has the same username
  const user = await User.findOne({
    username
  });

  if (user && user.password !== password) { // User exists, wrong password; send success: false
    console.log("Wrong password.");
    res.status(400).json({
      success: false
    });
  } else if (!user) { // Create new user; send success: true
    try {
      console.log("Creating new user.");
      const newUser = new User({
        username,
        password
      });
      newUser.save().then(() => {
        console.log("New user added", newUser.username);
        res.status(200).json({
          success: true
        });
      });
    } catch (err) {
      console.log(err);
    }
  } else { //user exists, password correct; send success: true
    console.log("User found: ", username);
    res.status(200).json({
      success: true
    });
  }
});

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/public/views/login.ejs"))
});


app.get("/home", (req, res) => {
  res.render(path.join(__dirname, "/public/views/index.ejs"));
});

// app.get('/',(req,res) => {
//   session=req.session;
//   if(session.userid){
//       res.send("Welcome User <a href=\'/logout'>click to logout</a>");
//   }else
//   res.sendFile('views/index.html',{root:__dirname})
// });
app.route("/avomatcho") // index.js posts to db, match.js gets from db
  .post(async (req, res) => {
    const {
      seek,
      quantity,
      avoLoc,
      ripeness,
      exchange
    } = req.body;
    console.log(req.body);
    // console.log(seek);
    req.session.seek = seek;
    req.session.quantity = quantity;
    req.session.avoLoc = avoLoc;
    req.session.ripeness = ripeness;
    req.session.exchange = exchange;

    if (seek) { // If seek is true, use Seek schema
      try {
        const seekRequest = new Seek({
          quantity,
          avoLoc,
          ripeness,
          exchange
        });
        seekRequest.save().then(() => {
          console.log("Seek request saved!");
          res.status(200);
          res.send();
        })
      } catch (err) {
        console.log(err);
      }
    } else { // Else use Give schema
      try {
        const seekRequest = new Give({
          quantity,
          avoLoc,
          ripeness,
          exchange
        });
        seekRequest.save().then(() => {
          console.log("Give request saved!");
          res.status(200);
          res.send();
        })
      } catch (err) {
        console.log(err);
      }
    }
  })
  // Render match.ejs
  .get((req, res) => {
    res.render(path.join(__dirname, "public/views/match.ejs"), {
      seek: req.session.seek
    });
  })

// Search the db
app.get("/avomatcho/hello", async (req, res) => {
  if (req.session.seek) {
    const avoQuanto = await Give.find({ quantity: req.session.quantity }).limit(5);
    console.log(avoQuanto);
    res.status(200).json({
      data: avoQuanto
    });
  } else {
    const avoQuanto = await Seek.find({ quantity: req.session.quantity }).limit(5);
    console.log(avoQuanto);
    res.status(200).json({
      data: avoQuanto
    });
  }
});

var Message = mongoose.model("Message", {
  message: String
});

// app.get("/messages", (req, res) => {
//   Message.find({},(err, messages)=> {
//     res.send(messages);
//   })
// });

// app.get("/messages/:user", (req, res) => {
//   console.log(req.params);
//   var user = req.params.user;
//   Message.find({name: user},(err, messages)=> {
//     res.send(messages);
//   })
// });

// app.post("/messages", async (req, res) => {
//   try {
//     var message = new Message(req.body);

//     var savedMessage = await message.save();
//   } 
//   catch (error) {
//   res.sendStatis(500);
//   return console.log("error", error);
//   }
//   finally {
//     console.log("Message posted");
//   }
// });

// io.on("connection", () => {
//   console.log("A user is connected");
// });

// Connect to the database, then start the server.
const PORT = 5000;
mongoose.connect(MONGOOSE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
  .catch((err) => console.log(err));
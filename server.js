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

const userRouter = require("./routes/users");
const User = require("./models/User");

// Chat feature
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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




// sets the view engine to ejs
// app.set("view engine", "ejs");

// logging out every request details
app.use(morgan("common"));
app.use("/user", userRouter);
// setting the limit for the file size accepted for the request body
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// app.use(bodyParser.json({ limit: "25mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "25mb", extended: true }));

// serving the files from the folder "views", 
// (serves a different file depending on the user's current directory)
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/login.html"));
});

app.post('/login', async (req, res) => {
  const { username, bd } = req.body;
  console.log(req.body, "username: " + username, "bd: " + bd);
  // find the user that has the same username
  const user = await User.findOne(username);

  // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples
  if (!user) {
    try {
      console.log("the item not found, so we'll add this item");
      const newUser = new User({
        id: 0,
        username,
        bd,
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
    // res.redirect(`/home/${username}`);
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


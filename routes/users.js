const express = require("express");
const router = express.Router();

// mongoose models
const User = require("../models/User");

// the login page's form 
// 1.name
// 2.BD
// 3.password

router.post('/login', async (req, res) => {
  const {
    username,
    bd
  } = req.body;
  console.log(username);
  // find the user that has the same username
  const user = await User.findOne(username);

  // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples
  if (!user) {
    try {
      console.log("the item not found, so we'll add this item");
      const newUser = new User({
        id: user.id,
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
    res.redirect(`/${username}`);
  }
});

module.exports = router;

// https://medium.com/featurepreneur/connect-mongodb-database-to-express-server-step-by-step-53e548bb4967
// the below methods are asynchronous

// find only one instance matching the condition
// arg1: filter, arg2: callback(found: object or null)
// if you pass {} to the arg1, th method gets everything in the collection
// instead of using async and await, you can use pass a callback to 
// the arg2 
// Product.findOne({ name: "helo" }, (found) => {
//   if (found) {
//     res.send(found);
//   } else {
//     res.send("item not found");
//   }
// });

// search by the object's id
// const prod = await Product.findById();
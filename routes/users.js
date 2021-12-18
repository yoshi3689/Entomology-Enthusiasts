const express = require("express");
const router = express.Router();

// mongoose models


// the login page's form 
// 1.name
// 2.BD
// 3.password



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
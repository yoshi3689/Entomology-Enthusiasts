// const {
//   model,
//   Schema
// } = require("mongoose");

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  id: Number,
  bd: Date,
  location: {
    x: Number,
    y: Number
  },
  mostRecent: String
});

module.exports = mongoose.model("User", userSchema);

// seek: {
//   }
// over_ripe, ripe, under_ripe
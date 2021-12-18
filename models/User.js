const {
  model,
  Schema
} = require("mongoose");

const userSchema = new Schema({
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

module.exports = model("User", userSchema);

// seek: {
//   }
// over_ripe, ripe, under_ripe
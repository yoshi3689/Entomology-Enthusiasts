// const {
//   model,
//   Schema
// } = require("mongoose");

const mongoose = require("mongoose")

const giveSchema = new mongoose.Schema({
  quantity: Number,
  avoLoc: {
    // can I somehow get the location from the user object
    x: Number,
    y: Number
  },
  ripeness: [Boolean],
  exchange: Boolean,
  time: {
    type: Date,
    default: Date.now
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Give", giveSchema);
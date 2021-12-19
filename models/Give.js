// const {
//   model,
//   Schema
// } = require("mongoose");

const mongoose = require("mongoose")

const giveSchema = new mongoose.Schema({
  quantity: Number,
  avoLoc: [Number],
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
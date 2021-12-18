const {
  model,
  Schema
} = require("mongoose");

const giveSchema = new Schema({
  quantity: Number,
  location: {
    // can I somehow get the location from the user object
    x: Number,
    y: Number
  },
  ripeness: {
    type: [Boolean],
    default: [false, false, false]
  },
  exchange: {
    type: Boolean,
    default: false
  },
  time: {
    type: Date,
    default: Date.now
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = model("Give", giveSchema);
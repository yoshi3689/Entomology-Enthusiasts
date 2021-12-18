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
  ripeness: [Boolean],
  exchange: Boolean,
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
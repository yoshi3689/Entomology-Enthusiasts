const {
  model,
  Schema
} = require("mongoose");

const avocadoSchema = new Schema({
  q: Number,
  location: {
    // can I somehow get the location from the user object
    x: Number,
    y: Number
  },
  ripeness: {
    type: String,
    enum: ['over_ripe', 'ripe', 'under_ripe'],
    default: 'ripe'
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

module.exports = model("Post", avocadoSchema);
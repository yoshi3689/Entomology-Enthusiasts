const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema({
  message: String,
  time: {
    type: Date,
    default: Date.now
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Chat", chatSchema);
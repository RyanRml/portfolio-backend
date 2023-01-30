const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Message = mongoose.model("messages", messageSchema);

module.exports = Message;

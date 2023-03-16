const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    chatId: String,
    sender: String,
    text: String,
  },
  {
    timestamps: true,
  }
);

const messaageModel = mongoose.model("Message", messageSchema);

module.exports = messaageModel;

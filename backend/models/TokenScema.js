const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true
  },
  isValid: {
    type: Boolean,
    default: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userAgent: {
    type: String
  },
  ip: {
    type: String
  }
});

module.exports = mongoose.model("Token", TokenSchema);

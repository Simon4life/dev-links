const mongoose = require('mongoose');
const validator = require("validator");

const singleLinkSchema = new mongoose.Schema({
  link: {
    type: String,
    validate: {
      validator: validator.isURL,
      message: "Please provide valid url",
    },
    required: true
  },
  platform: {
    type: String,
  },
  _id: {
    type: Number,
    unique: true
  }
});

const LinkSchema = new mongoose.Schema({
  links: [singleLinkSchema],
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a user"],
  },
})

module.exports = mongoose.model("linkSchema", LinkSchema)
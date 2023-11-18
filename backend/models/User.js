const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const validator =  require("validator")

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid url",
    },
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    minlength: 6,
  },
  // verificationToken: String,
  // isVerified: {
  //   type: Boolean,
  //   default: false,
  // },
  // verified: Date,
  imgUrl: {
    type: String,
    default:
      "https://res.cloudinary.com/dxyflcplw/image/upload/v1696767932/file_upload/qx7txoh0myoxne7plehs.jpg",
  },
});


UserSchema.pre("save", async function() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.confirmPassword = async function(candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
}


module.exports = mongoose.model('User', UserSchema);

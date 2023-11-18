const User = require("../models/User");
const cloudinary = require("cloudinary").v2;
const {StatusCodes} = require("http-status-codes");
const fs = require("fs");

const updateUserProfile = async (req, res) => {
  const {userId} = req.user;
  const {firstName, lastName, email} = req.body;
  const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {useFileName: true, folder: "file_upload"})

  fs.unlinkSync(req.files.image.tempFilePath);
  const newImg = result.secure_url;

  const user = await User.findOneAndUpdate({_id: userId}, {imgUrl: newImg, email, firstName, lastName}, {returnOriginal: false});
  const data = {fullName: `${user.firstName} ${user.lastName}`, newImgUrl: user.imgUrl}
  
  res.status(StatusCodes.OK).json({data})
}

const getUserProfile = async (req, res) => {
  const {userId} = req.params;
  const user = await User.findOne({_id: userId})
  if(user) {
    const {firstName, lastName, email, imgUrl} = user;
    res.status(StatusCodes.OK).json({user: {firstName, lastName, email, profilePicture: imgUrl}})
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "User not found" });
  }
}


module.exports = {updateUserProfile, getUserProfile};
const User = require("../models/User");
const {StatusCodes} = require("http-status-codes")
const {addCookieToResponse} = require("../utils/jwt")
const UnauthenticatedError = require("../errors/unauthenticated")
const BadRequestError = require("../errors/badRequest")
const Token = require("../models/TokenScema");
const crypto = require('crypto')
const CustomError = require("../errors/customError");
const {createJWT} = require("../utils/jwt");
const sendVerificationEmail = require("../utils/sendVerificationEmail");


const registerUser = async (req, res) => {
  const {email, firstName, lastName, password} = req.body;
  
  if(!email || !firstName || !lastName || !password) {
    throw new BadRequestError("please provide credentials")
  }

  const duplicateEmail = await User.findOne({email})
  if(duplicateEmail) {
    throw new BadRequestError("Email already exists");
  }
  // const user = await User.create({
  //   firstName,
  //   lastName,
  //   email,
  //   password,
  //   verificationToken,
  // });

  // to do later
  const verificationToken = crypto.randomBytes(40).toString("hex");
  const origin =  req.get("host");
  
  const user = await User.create({firstName, lastName, email, password, verificationToken});
  sendVerificationEmail({
    firstName: user.firstName,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  }); 
  res.status(StatusCodes.OK).json({msg: "pls verify your email"})
}

const verifyEmail = async () => {
  const {verificationToken, email} = req.params;
  const user = await User.findOne({email});
  if(!user) {
    res.status(StatusCodes.NOT_FOUND).json({message: 'user not found'})
  }
  if(user.verificationToken !== verificationToken) {
    throw new CustomError.UnauthenticatedError("verification failed");
  }
  user.isVerified = true;
  user.verified = date.now();
  await user.save()

  res.status(StatusCodes.OK).json({message: "you have been verified successfully"})
}

const loginUser = async (req, res) => {
  const {email, password} = req.body;

  if(!email || !password) {
    res.status(StatusCodes.BAD_REQUEST).json({"message": "Please provide valid values"})
  }

  const user = await User.findOne({email})
  if(!user) {
    throw new CustomError.BadRequestError("User does not exists")
  }

  const verifyPassword = await user.confirmPassword(password);
  if(!verifyPassword) {
    throw new CustomError.UnauthenticatedError("Invalid credentials")
  }

  const tokenUser = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    userId: user._id.toString()
  }

  let token = "";
  const existingToken = await Token.findOne({userId: tokenUser.userId});
  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new CustomError.UnauthenticatedError("Invalid credentials");
    }
    const accessToken = createJWT(
      tokenUser,
      process.env.ACCESS_TOKEN_SECRET,
      process.env.ACCESS_TOKEN_LIFETIME
    );
    token = existingToken.token;
    addCookieToResponse({ res, user: tokenUser, token });
    res.status(StatusCodes.OK).json({ user: { tokenUser, accessToken } });
    return;
  }
   
}

const logoutUser = async (req, res) => {
  res.cookie('refreshToken', "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  });
  res.status(StatusCodes.OK).json({message: "user logged out"})
}

module.exports = {
  loginUser,
  registerUser,
  logoutUser,
  verifyEmail
}
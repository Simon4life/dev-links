const User = require("../models/User");
const { StatusCodes } = require("http-status-codes")
const { addCookieToResponse } = require("../utils/jwt")
const UnauthenticatedError = require("../errors/unauthenticated")
const BadRequestError = require("../errors/badRequest")
const Token = require("../models/TokenScema");
const crypto = require('crypto')
const CustomError = require("../errors/customError");
const { createJWT } = require("../utils/jwt");
// const sendVerificationEmail = require("../utils/sendVerificationEmail");


const registerUser = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  if (!email || !firstName || !lastName || !password) {
    throw new BadRequestError("Please provide all required credentials.");
  }

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    res.status(StatusCodes.BAD_REQUEST).json({ "message": "Email already exists" })
  }

  const verificationToken = crypto.randomBytes(40).toString("hex");

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    verificationToken
  });

  const tokenUser = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    userId: user._id.toString()
  };

  // Generate fresh access token
  const accessToken = createJWT(
    tokenUser,
    process.env.ACCESS_TOKEN_SECRET,
    process.env.ACCESS_TOKEN_LIFETIME
  );

  // Create and store refresh token
  const refreshToken = crypto.randomBytes(40).toString("hex");

  await Token.create({
    token: refreshToken,
    userId: user._id,
    userAgent: req.headers["user-agent"],
    ip: req.ip,
    isValid: true
  });

  // Attach cookies (access + refresh)
  addCookieToResponse({
    res,
    user: tokenUser,
    token: refreshToken // stored in cookies
  });

  res.status(StatusCodes.CREATED).json({
    user: tokenUser,
    accessToken
  });
};

const getUser = async (req, res) => {
  const userId = req.user.userId;
  const user = await User.findById(userId);
  const tokenUser = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    userId: user._id.toString()
  }
  if (user) {
    res.status(StatusCodes.OK).json({ user: tokenUser })
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(StatusCodes.BAD_REQUEST).json({ "message": "Please provide valid values" })
  }

  const user = await User.findOne({ email })
  if (!user) {
    throw new CustomError.BadRequestError("User does not exists")
  }

  const verifyPassword = await user.confirmPassword(password);
  if (!verifyPassword) {
    throw new CustomError.UnauthenticatedError("Invalid credentials")
  }

  const tokenUser = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    userId: user._id.toString()
  }

  let token = "";
  const existingToken = await Token.findOne({ userId: tokenUser.userId });
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
  res.status(StatusCodes.OK).json({ message: "user logged out" })
}

module.exports = {
  loginUser,
  registerUser,
  logoutUser,
  getUser
}
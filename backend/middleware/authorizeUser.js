const { verifyUserToken } = require("../utils/jwt");
const { StatusCodes } = require("http-status-codes");
const Token = require("../models/TokenScema");
const User = require("../models/User")
const addCookieToResponse = require("../utils/jwt");
const jwt = require("jsonwebtoken");

const authorizeUser = async (req, res, next) => {
  // const accessToken = req.headers.authorization.split(" ")[1];
  const refreshToken = req.signedCookies.refreshToken;
  console.log(refreshToken)
  // if (!accessToken) {
  //   return res.status(StatusCodes.FORBIDDEN).json({ message: "Invalid credentials" })
  // }
  // try {
  //   payload = verifyUserToken(accessToken, process.env.ACCESS_TOKEN_SECRET);
  // } catch (error) {
  //   res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid credentials" })
  // }
  let payload = verifyUserToken(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  const existingToken = await Token.findOne({ token: payload.token });
  if (!existingToken || !existingToken?.isValid) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Invalid credentials" });
  }
  const user = await User.findOne({ email: payload.email });
  const tokenUser = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    userId: user._id.toString(),
  };
  // addCookieToResponse({ res, user: tokenUser, token: existingToken.token });
  req.user = tokenUser;
  return next();
  // if (payload && payload.exp) {
  //   const currentTime = Math.floor(Date.now() / 1000);
  //   if (payload.exp < currentTime) {



  //   } else {
  //     req.user = { userId: payload.userId };
  //     return next();
  //   }
  // } else {
  //   console.error("Invalid accessToken");
  // }
}

module.exports = authorizeUser
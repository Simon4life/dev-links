const { verifyUserToken } = require("../utils/jwt");
const { StatusCodes } = require("http-status-codes");
const Token = require("../models/TokenScema");
const User = require("../models/User")
const {addCookieToResponse, createJWT} = require("../utils/jwt");
const jwt = require("jsonwebtoken");


const authorizeUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const accessToken = authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;
  
  if(!accessToken) return res.status(StatusCodes.BAD_REQUEST).json({msg: "access token not found"})
    
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if(err) {
      // access token expired -- try refresh
      const refreshToken = req.cookies.refreshToken;

      if(!refreshToken) return res.status(StatusCodes.NOT_FOUND).json({msg: "refresh token not found"});
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decodedRefresh) => {
        if(err) return res.status(StatusCodes.BAD_REQUEST).json({msg: ""})
        console.log(req)
        const userId = req.userId
        const tokenUser = await User.findOne({userId});
        const newAccessToken = createJWT(tokenUser, process.env.ACCESS_TOKEN_SECRET, process.env.ACCESS_TOKEN_LIFETIME);
        res.setHeader("x-access-token", newAccessToken);
        req.user = {userId: decodedRefresh}
        next()
      })
    } else {
        req.user = decoded;
        const userId = decoded.userId
        console.log(userId)
        const refreshTokenUser = await Token.findOne({ userId, isValid: true });
        addCookieToResponse(res, refreshTokenUser.token, process.env.REFRESH_TOKEN_SECRET, process.env.REFRESH_TOKEN_LIFETIME);
        req.userId = userId;
        next()
    }
  })
}

module.exports = authorizeUser
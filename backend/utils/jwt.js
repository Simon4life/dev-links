const jwt = require("jsonwebtoken");

const createJWT = (payload, secret, lifeTime) => {
  return jwt.sign(payload, secret, {expiresIn: lifeTime});
}

const verifyUserToken = (token, secret) => {
  return jwt.verify(token, secret);
}

const addCookieToResponse = async({res, user, token}) => {
  const refreshToken = createJWT(
    {token, email: user.email}, 
    process.env.REFRESH_TOKEN_SECRET, 
    process.env.REFRESH_TOKEN_LIFETIME
  );

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 30),
    secure: process.env.NODE_ENV === 'production',
    sameSite: "None",
    signed: true,
  });

}

module.exports = {createJWT, verifyUserToken, addCookieToResponse}
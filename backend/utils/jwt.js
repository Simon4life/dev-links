const jwt = require("jsonwebtoken");

const createJWT = (payload, secret, lifeTime) => {
  return jwt.sign(payload, secret, { expiresIn: lifeTime });
}

const verifyUserToken = (token, secret) => {
  return jwt.verify(token, secret);
}

const addCookieToResponse = async ({ res, token }) => {
  const refreshToken = createJWT({token}, process.env.REFRESH_TOKEN_SECRET, process.env.REFRESH_TOKEN_LIFETIME)
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    // secure: process.env.NODE_ENV === 'production',
    sameSite: "Lax",
    signed: true,
    secure: false
  });
}

module.exports = { createJWT, verifyUserToken, addCookieToResponse }
const jwt = require("jsonwebtoken");

const createJWT = (payload, secret, lifeTime) => {
  return jwt.sign(payload, secret, { expiresIn: lifeTime });
}

const verifyUserToken = (token, secret) => {
  return jwt.verify(token, secret);
}

const addCookieToResponse = async ({ res, user, token }) => {
  const refreshToken = createJWT(
    { token, email: user.email, id: user.userId },
    process.env.REFRESH_TOKEN_SECRET,
    process.env.REFRESH_TOKEN_LIFETIME
  );

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    // secure: process.env.NODE_ENV === 'production',
    sameSite: "Lax",
    signed: true,
    secure: false
  });
  console.log(res.cookies)
}

module.exports = { createJWT, verifyUserToken, addCookieToResponse }
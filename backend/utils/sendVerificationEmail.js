const sendEmail = require("./sendEmails");

const sendVerificationEmail = async ({firstName, email, verificationToken, origin}) => {
  const verifyEmailLink = `${origin}/user/verify-email/?verificationToken=${verificationToken}&email=${email}`;
  const message = `<p>Pls confirm that this is your email by clicking this link: <a href="${verifyEmailLink}">Verify Email</a></p>`;

  return sendEmail({
    to: email,
    subject: "Email confirmation",
    html: `<h4>Hello ${firstName}</h4>
    ${message}
    `,
  })
}

module.exports = sendVerificationEmail;
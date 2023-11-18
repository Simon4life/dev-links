const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");

const sendEmail = async ({to, subject, html}) => {
  let testAccount = await nodemailer.createTestAccount();
  console.log(testAccount);
  const transporter = nodemailer.createTransport(nodemailerConfig);
  return await transporter.sendMail({
    from: '"ogar simon" <simonogar@gmail.com>',
    to,
    subject,
    html
  })
}

module.exports = sendEmail;
const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");

const sendEmail = async ({to, subject, html}) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);
  return await transporter.sendMail({
    from: '"Simon Solomon" <ogarsimon0000@gmail.com>',
    to,
    subject,
    html
  })
}

module.exports = sendEmail;
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const { MAILGUN_API_KEY } = process.env;

const mailgun = new Mailgun(formData);
require("dotenv").config();

const sendEmail = async (data) => {
  const mg = mailgun.client({
    username: "ulianaastra1@gmail.com",
    key: MAILGUN_API_KEY,
  });
  mg.messages
    .create("sandbox66b2be7e6692473f998f75d202d8785d.mailgun.org", {
      from: "Mailgun Sandbox <ulianaastra1@gmail.com>",
      to: [data.to],
      subject: "Verify your email",
      text: "Verify your email",
      html: data.html,
    })
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
};
module.exports = sendEmail;

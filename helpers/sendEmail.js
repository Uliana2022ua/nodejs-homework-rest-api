const mgMail = require('mailgun.js');

const {MAILGUN_API_KEY} = process.env;

mgMail.setApiKey(MAILGUN_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "ulianaastra1@gmail.com" };
  try {
    await mgMail.send(email);
    return true;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = sendEmail;
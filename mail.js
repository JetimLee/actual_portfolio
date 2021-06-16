const nodemailer = require("nodemailer");
const mailjet = require("node-mailjet").connect(
  "c4263c41a4ba6d638683592af86959bc",
  "f6f508983d92008b67c2c2fdd55635de"
);
const auth = {
  auth: {
    api_key: "",
    domain: "",
  },
};

const sendMail = (name, email, phonenumber, message, cb) => {
  const mailOptions = {
    sender: name,
    from: email,
    to: "gavincoulson1@gmail.com",
    phoneNumber: phonenumber,
    message: message,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });

  // Exporting the sendmail
  module.exports = sendMail;
};

const transporter = nodemailer.createTransport(mailGun(auth));

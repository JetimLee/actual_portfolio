const express = require("express");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();
const password = process.env.EMAIL_PASSWORD;

const PORT = process.env.PORT || 4000;

app.use(express.static(__dirname + "/front-end"));

app.get("/", (req, resp) => {
  resp.sendFile(__dirname + "/front-end/index.html");
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/formData", (req, resp) => {
  const data = req.body;

  const smtpTransport = nodemailer.createTransport({
    service: "Gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "gavincoulsonportfolio@gmail.com",
      pass: password,
    },
    tls: { rejectUnauthorized: false },
  });

  let mailOptions = {
    from: data.email,
    to: "gavincoulson1@gmail.com",
    subject: `message from ${data.name}`,
    html: `<h3>Information</h3>
    <ul><li>Name: ${data.name}</li>
    <li>Email: ${data.email}</li>
    <li>Phonenumber ${data.phonenumber}</li></ul>
    <h3>Message</h3>
    <p>${data.message}</p>`,
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      resp.send(error);
    } else {
      resp.send(`Success`);
    }
  });
  smtpTransport.close();
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

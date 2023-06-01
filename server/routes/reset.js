const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const sgMail = require(`@sendgrid/mail`);
const { User } = require("../models/user");

sgMail.setApiKey(
  process.env.SENDGRID_KEY
);

require("dotenv").config();

router.post("/", (req, res, next) => {

  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          return res.status(400).send("No account with entered email found");
        }
        res.send("User found")
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
       
        return user.save();
      })
      .then((savedUser) => {
        if (savedUser) {
          console.log(savedUser)
          let msg = {
            to: req.body.email,
            from: "lukamatovic1994@gmail.com",
            subject: "Password reset",
            html: `
                        <p> You requested a password reset </p>
                        <p>Click this <a href="${process.env.CLIENT_URL}/new-pass/${token}/${savedUser._id}"> link to set a new password. </p>
                    `,
          };
          sgMail.send(msg, function(err, info) {
            if (err) {
              console.log("Email Not Sent");
            } else {
              console.log("Email Sent Success");
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

  });
});

module.exports = router;
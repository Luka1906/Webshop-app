const Joi = require("joi");
const express = require("express");
const { User } = require("../models/user");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const password = Joi.string()
    .pattern(
      new RegExp("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,30}$")
    )
    .required();

  const { error } = password.validate(req.body.password);

  if (error) {
    console.log(error);

    return res.status(400).send(error.details[0].message);
  }

  const newPassword = req.body.password;
  const userId = req.body.id;
  const passwordToken = req.body.token;
  let resetUser;

  User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
    _id: userId,
  })
    .then((user) => {
      resetUser = user;
      res.send("User found")
      return bcrypt.hash(newPassword, 12);
    })
    .then((hashedPassword) => {
      resetUser.password = hashedPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      return resetUser.save();
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
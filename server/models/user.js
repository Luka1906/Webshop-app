const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 200,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 1024,
  },
  resetToken: String,
  resetTokenExpiration: Date
});

const User = mongoose.model("User", userSchema);

exports.User = User

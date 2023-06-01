const express = require("express");
const app = express();
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login")
const stripe = require("./routes/stripe");
const reset = require("./routes/reset");
const newPass = require("./routes/new-password")


require("dotenv").config();


app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/stripe", stripe);
app.use("/api/reset", reset);
app.use("/api/new-pass/:token/:id", newPass)



const port = process.env.PORT || 4000;
const uri = process.env.DB_URI;

mongoose
  .connect(uri)
  .then(() => app.listen(port, () => console.log("Backend server is running!")))
  .catch((err) => console.log(err));
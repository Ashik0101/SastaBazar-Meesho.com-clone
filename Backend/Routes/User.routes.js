const { UserModel } = require("../Models/User.model");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userRouter = express.Router();
userRouter.use(express.json());

//registering user here
userRouter.post("/register", async (req, res) => {
  const { name, password, phone, email } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length) {
      res.send({ msg: "User is Already Registered!!!", flag: true });
    } else {
      bcrypt.hash(password, 6, (err, encrypted) => {
        if (encrypted) {
          const data = new UserModel({
            name,
            password: encrypted,
            phone,
            email,
          });
          data.save();
          console.log(encrypted);
          res.send({ msg: "User Registered Successfully !!", flag: "success" });
        } else {
          res.send({ msg: "Some error while encrypting the password!!" });
          console.log("some error while encrypting the password :", err);
        }
      });
    }
  } catch (err) {
    res.send({ msg: "Some error while registering the user." });
    console.log("some error while registering the user :", err);
  }
});

//login part is here
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length) {
      bcrypt.compare(password, user[0].password, (err, same) => {
        if (same) {
          const token = jwt.sign(
            { userID: user[0]._id },
            process.env.SECRET_KEY
          );
          res.send({
            msg: "User Logged In Successfully!",
            token: token,
            userName: user[0].name,
          });
        } else {
          res.send({ msg: "Wrong Credentials!" });
        }
      });
    } else {
      res.send({ msg: "Wrong Credentials !" });
    }
  } catch (err) {
    res.send({ msg: "Some error in login part!" });
    console.log("some error while login:", err);
  }
});
module.exports = { userRouter };

const User = require("../db/Models/user.model");
const Router = require("express").Router();
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isValidEmail(email) {
  return emailRegex.test(email);
}

Router.post("/", async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;
  if (
    username.length <= 0 ||
    firstName.length <= 0 ||
    lastName.length <= 0 ||
    email.length <= 0 ||
    !isValidEmail(email) ||
    password.length <= 4
  )
    res.status(400).json({ message: "Invalid Data" });

  const ret = await User.findOne({ $or: [{ username }, { email }] });
  if (ret !== null) {
    res.status(400).json({ message: "field username is exist" });
  } else {
    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password,
    });
    newUser.save();

    res.status(201).json({ message: "successfully created", data: newUser });
  }
});

module.exports = Router;

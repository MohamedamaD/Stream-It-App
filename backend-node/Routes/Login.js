const User = require("../db/Models/user.model");
const Router = require("express").Router();

Router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({ email: email, password: password });
  console.log(user);
  if (user.length <= 0) {
    return res.status(404).json({ message: "User not found" });
  } else {
    return res.status(200).json({ message: "User exist", data: user });
  }
});

module.exports = Router;

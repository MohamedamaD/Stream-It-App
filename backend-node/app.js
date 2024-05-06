const cors = require("cors");
const express = require("express");
const connection = require("./db");
const registerRouter = require("./Routes/Register");
const loginRouter = require("./Routes/Login");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.write("Welcome ");
  res.end();
});

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  connection(process.env.CONN)
    .then(console.log("connecting"))
    .catch((err) => {
      console.log(err);
    });
});

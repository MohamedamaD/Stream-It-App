const mongoose = require("mongoose");

async function connection(connectionString) {
  const connect = await mongoose.connect(connectionString);
}
module.exports = connection;

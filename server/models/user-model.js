const mongoose = require("mongoose");
const userScema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    image: String,
    phone: String,
    birthdate: Date, 
    password: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", userScema);
module.exports = UserModel;

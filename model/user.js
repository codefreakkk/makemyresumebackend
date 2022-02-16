const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const user = mongoose.Schema({
  uemail: String,
  upass: String,
});

user.methods.generateToken = async function () {
  try {
    const _id = this._id;
    const token = await jwt.sign({ _id }, "codefreak.co.in");
    // this.tokens = this.tokens.concat({ token });
    // await this.save();
    return token;
  } catch (err) {
    console.log("Token generation err " + err);
  }
};

const userSchema = new mongoose.model("userSchema", user);

module.exports = userSchema;

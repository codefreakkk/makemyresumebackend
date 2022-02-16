const mongoose = require("mongoose");

const resume = mongoose.Schema({
  // Personal Schema
  userId: String,
  resumeName: String,
  name: String,
  headLine: String,
  address: String,
  phoneNumber: String,
  city: String,
  email: String,
  linkedIn: String,
});

const pdetails = new mongoose.model("pdetails", resume);

module.exports = pdetails;

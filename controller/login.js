const express = require("express");
const router = express.Router();
const user = require("../model/user");

// signup route
router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const data = new user({ uemail: username, upass: password });
  data.save((err, data) => {
    if (err) {
      res.status(500).send(false);
    } else {
      res.status(200).send(true);
    }
  });
});

// login route
router.post("/login", async (req, res) => {
  const username = req.body.name;
  const password = req.body.pass;

  try {
    const data = await user.findOne({ uemail: username });
    if (data.upass == password) {
      const token = await data.generateToken();
      res.send({ token: token, status: true });
    } else {
      res.send({ status: false });
    }
  } catch (err) {
    res.send({ status: false });
  }
});

// registration route
router.post("/register", (req, res) => {
  try {
    const name = req.body.name;
    const pass = req.body.pass;
    console.log(pass);
    const data = new user({ uemail: name, upass: pass });
    data.save((err, data) => {
      if (!err) {
        res.status(200).send({ state: true });
      } else {
        res.send({ state: false });
      }
    });
  } catch (err) {
    res.send({ status: false });
  }
});

module.exports = router;

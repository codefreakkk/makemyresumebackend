const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// route for userdash
router.post("/userdash", auth, (req, res) => {
  res.send({ status: true });
});
router.post("/resume", auth, (req, res) => {
  res.send({ status: true });
});

module.exports = router;

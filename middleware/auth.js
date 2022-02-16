const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.body.token;
    const verify = jwt.verify(token, "codefreak.co.in");
    console.log(verify);
    next();
  } catch (err) {
    res.send({ status: false });
    console.log("Auth err " + err);
  }
};

module.exports = auth;

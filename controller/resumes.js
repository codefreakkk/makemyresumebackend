const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const router = express.Router();
const pdetails = require("../model/personalDetails");

// personal details route
router.post("/personaldetails", (req, res) => {
  try {
    const object = req.body.pinfo;
    const token = req.body.token;
    const verify = jwt.verify(token, "codefreak.co.in");
    const id = verify._id;
    pdetails.find({ userId: id }, (err, data) => {
      if (!err) {
        if (data.length > 0) {
          pdetails.findOneAndUpdate(
            { userId: id },
            {
              userId: id,
              resumeName: object.rname,
              name: object.uname,
              headLine: object.hline,
              address: object.address,
              phoneNumber: object.pnumber,
              city: object.city,
              email: object.email,
              linkedIn: object.linkedin,
            },
            (err, data) => {
              if (!err) {
                console.log("Updated");
                res.send(data);
              }
            }
          );
        } else {
          const data = new pdetails({
            userId: id,
            resumeName: object.rname,
            name: object.uname,
            headLine: object.hline,
            address: object.address,
            phoneNumber: object.pnumber,
            city: object.city,
            email: object.email,
            linkedIn: object.linkedin,
          });
          data.save((err, result) => {
            if (!err) {
              console.log("Resume added successfully");
              res.send(result);
            } else {
              console.log("error saving resume");
            }
          });
        }
      } else {
        res.send({ status: false });
      }
    });
  } catch (e) {
    console.log("ERROR " + e);
  }
});

// get personal details route
router.post("/getpersonaldetails", (req, res) => {
  try {
    const token = req.body.token;
    const verify = jwt.verify(token, "codefreak.co.in");
    pdetails.find({ userId: verify._id }, (err, data) => {
      if (!err) {
        res.send(data);
      } else {
        res.send({ status: false });
      }
    });
  } catch (err) {
    res.send({ status: false });
  }
});

module.exports = router;

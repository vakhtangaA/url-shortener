const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");

const URL = require("../../models/Urls");
const USER = require("../../models/User");

router.post("/", (req, res) => {
  try {
    if (req.body) {
      res.send(req.body);
    }
  } catch (error) {
    console.log(error);
  }
  console.log("user--", req.body);
});

module.exports = router;

const express = require("express");
const router = express.Router();

const URL = require("../../models/Urls");

router.get("/", (req, res) => {
  URL.find({}, (err, urls) => {
    if (urls) {
      res.send(urls);
    } else {
      console.log(err);
    }
  });
  URL.updateMany({}, { $set: { visited: 0 } });
});

module.exports = router;

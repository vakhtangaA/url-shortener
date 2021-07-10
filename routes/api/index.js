const express = require("express");
const router = express.Router();

const URL = require("../../models/Urls");

router.get("/:hash", (req, res) => {
  const id = req.params.hash;

  URL.findOne({ _id: id }, (err, url) => {
    if (url) {
      console.log(url);
      const visited = url.visited + 1;
      console.log("visited", visited);

      res.redirect(url.url);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;

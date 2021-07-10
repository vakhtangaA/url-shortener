const express = require("express");
const router = express.Router();

const URL = require("../../models/Urls");
const USER = require("../../models/User");

router.get("/:hash", (req, res) => {
  const id = req.params.hash;

  URL.findOne({ _id: id }, (err, url) => {
    if (url) {
      console.log(url);
      const visited = url.visited + 1;

      URL.updateOne(
        { _id: id },
        {
          visited: visited,
        },
        {
          new: true,
        }
      );

      res.redirect(doc.url);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;

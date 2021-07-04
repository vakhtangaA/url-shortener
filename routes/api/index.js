const express = require("express");
const router = express.Router();

router.get("/:hash", (req, res) => {
  const id = req.params.hash;

  URL.findOne({ _id: id }, (err, doc) => {
    if (doc) {
      console.log(doc);
      res.redirect(doc.url);
    } else {
      console.log("/");
    }
  });
});

module.exports = router;

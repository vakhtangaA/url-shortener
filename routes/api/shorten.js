const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");

const URL = require("../../models/Urls");

router.get("/test", (req, res) => res.json({ msg: "API is working" }));

router.post("/", (req, res) => {
  if (req.body.url) {
    urlData = req.body.url;
  }
  console.log("URL is: ", urlData);

  // Check if the url already exists
  URL.findOne({ url: urlData }, (err, doc) => {
    if (doc) {
      console.log("Entry found in db");
    } else {
      console.log("this is a new URL");
      const webaddress = new URL({
        _id: uniqid(),
        url: urlData,
      });
      webaddress.save(err => {
        if (err) {
          return console.log(err);
        }
        res.send({
          url: urlData,
          hash: webaddress.id,
          status: 200,
          statusTxt: "OK",
        });
      });
    }
  });
});

module.exports = router;

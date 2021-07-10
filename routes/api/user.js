const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");

const URL = require("../../models/Urls");
const USER = require("../../models/User");

router.post("/", (req, res) => {
  const { email, name, url } = req.body;
  if (email) {
    USER.findOne({ email: email }, (err, user) => {
      if (user) {
        console.log("user exists");
        if (user.urls.includes(url)) {
          console.log("urls already contains " + url);
        } else {
          console.log("not contains", user);
          USER.findOneAndUpdate(
            { email: email },
            {
              $push: { urls: url },
            },
            function (err, suc) {
              if (err) {
                console.log(err);
              } else {
                console.log(suc);
              }
            }
          );
        }
      } else {
        const newUser = new USER({
          name: name,
          email: email,
          password: uniqid(),
          urls: [url],
        });

        newUser.save((err) => {
          if (err) {
            console.log(err);
          } else {
            res.send(newUser);
          }
        });
      }
    });
  }
});

router.get("/:email", (req, res) => {
  USER.findOne({ email: req.params.email }, (err, user) => {
    if (user) {
      res.send(user);
    } else {
      console.log("user doesn't exist");
    }
  });
});

module.exports = router;

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");

const users = require("./routes/api/users");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("build"));

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDb connected"))
  .catch(err => console.log(err));

const shorten = require("./routes/api/shorten");
app.use("/api/shorten", shorten);

const redirect = require("./routes/api/redirect");
app.use("/api/redirect", redirect);

app.get("/:hash", (req, res) => {
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

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

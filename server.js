const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const expressLayouts = require("express-ejs-layouts");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("build"));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDb connected"))
  .catch(err => console.log(err));

const index = require("./routes/api/index");
app.use("/", index);

const shorten = require("./routes/api/shorten");
app.use("/api/shorten", shorten);

const redirect = require("./routes/api/redirect");
app.use("/api/redirect", redirect);

const users = require("./routes/api/users");
app.use("/users", users);

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

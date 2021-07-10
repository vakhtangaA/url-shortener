const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UrlSchema = new Schema({
  _id: { type: String },
  url: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  visited: {
    type: Number,
    default: 0,
  },
});

module.exports = URL = mongoose.model("URL", UrlSchema);

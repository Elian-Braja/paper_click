const mongoose = require("mongoose");

const RepoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  user: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Repo", RepoSchema);

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: false },
  githubLink: { type: String, required: false },
  demoLink: { type: String, required: true },
  img: { type: String, required: true },
});

const Project = new mongoose.model("projects", projectSchema);
module.exports = Project;

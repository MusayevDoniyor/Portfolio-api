const express = require("express");
const Project = require("../models/ProjectModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { name, description, category, githubLink, demoLink, img } = req.body;

  const newProject = new Project({
    name,
    description,
    category,
    githubLink,
    demoLink,
    img,
  });

  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, description, category, githubLink, demoLink, img } = req.body;

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        name,
        description,
        category,
        githubLink,
        demoLink,
        img,
      },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const authenticateToken = require("../middleware/token");

router.get("/", authenticateToken, async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", authenticateToken, async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed || false,
      deadline: req.body.deadline,
      priority: req.body.priority || "medium",
    });

    const newTask = await task.save(); 
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", authenticateToken, async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
        deadline: req.body.deadline,
        priority: req.body.priority,
      },
      { new: true }
    );

    if (!task) {
      res.status(404).json({ message: "Task not found" });
    } else {
      res.status(200).json(task);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    } else {
      res.status(204).send();
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// ➕ CREATE TASK
router.post("/", async (req, res) => {
  try {
    const { title, description, user } = req.body;

    const task = new Task({
      title,
      description,
      user,
    });

    await task.save();

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 📄 GET ALL TASKS
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().populate("user", "name email");

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✏️ UPDATE TASK
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ❌ DELETE TASK
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// IMPORTANT
module.exports = router;
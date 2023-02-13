const TaskModel = require("../models/task");

const getAllTasks = (req, res) =>
  res.status(200).send("All Items from the controllers directory found!!!!");

const createTask = async (req, res) => {
  try {
    const createTask = await TaskModel.create(req.body);
    res.status(201).json({ createTask });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getSingleTasks = (req, res) => {
  res.status(200).json({ id: req.params.id });
};

const updateSingletask = (req, res) => {
  res.status(200).send("Task updated");
};

const deleteTask = (req, res) => {
  res.status(200).send("Task deleted");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTasks,
  updateSingletask,
  deleteTask,
};

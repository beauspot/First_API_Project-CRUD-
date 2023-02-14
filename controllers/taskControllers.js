const TaskModel = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const getAllTasks = await TaskModel.find({});
    res.status(200).json({ getAllTasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createTask = async (req, res) => {
  try {
    const createTask = await TaskModel.create(req.body);
    res.status(201).json({ createTask });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getSingleTasks = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const findTasksId = await TaskModel.findOne({ _id: taskId });
    if (!findTasksId)
      return res
        .status(404)
        .json({ message: "No Task With The Id: " + taskId });
    else res.status(200).json({ findTasksId });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateSingletask = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
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

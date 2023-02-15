const TaskModel = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const getTasks = await TaskModel.find({});
    res.status(200).json({ getTasks });
    // res.status(200).json({ getTasks, amount: getTasks.length });
    /*   res
      .status(200)
      .json({
        status: "Successful",
        data: { getTasks, nbHits: getTasks.length },
      }) */
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
    const { id: taskID } = req.params;
    const findTasksId = await TaskModel.findOne({ _id: taskID });
    if (!findTasksId)
      return res
        .status(404)
        .json({ message: "No Task With The Id: " + taskID });
    else res.status(200).json({ findTasksId });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateSingletask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    //res.status(200).json({ });
    const updateData = await TaskModel.findOneAndUpdate(
      { _id: taskId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updateData)
      return res
        .status(404)
        .json({ message: `No Task With The Id: ${taskId}` });
    else res.status(200).json({ updateData });
  } catch (error) {
    res.status(500).json({ mesage: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const Id_delete = await TaskModel.findOneAndDelete({ _id: taskId });
    if (!Id_delete)
      return res
        .status(404)
        .json({ message: "No Task With The Id: " + taskId });
    else res.status(200).json({ Id_delete });
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTasks,
  updateSingletask,
  deleteTask,
};

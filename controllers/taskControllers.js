const TaskModel = require("../models/task");
const asyncAwaitWrapper = require("../middleware/async_await");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncAwaitWrapper.asyncWrapper(async (req, res) => {
  const getTasks = await TaskModel.find({});
  res.status(200).json({ getTasks });
  // res.status(200).json({ getTasks, amount: getTasks.length });
  /*   res
      .status(200)
      .json({
        status: "Successful",
        data: { getTasks, nbHits: getTasks.length },
      }) */
});

const createTask = asyncAwaitWrapper.asyncWrapper(async (req, res) => {
  const createTask = await TaskModel.create(req.body);
  res.status(201).json({ createTask });
});

const getSingleTasks = asyncAwaitWrapper.asyncWrapper(
  async (req, res, next) => {
    const { id: taskID } = req.params;
    const findTasksId = await TaskModel.findOne({ _id: taskID });
    if (!findTasksId) {
      return next(createCustomError(`No Task with id: ${taskID}`, 404));
    } else {
      res.status(200).json({ findTasksId });
    }
  }
);

const updateSingletask = asyncAwaitWrapper.asyncWrapper(async (req, res) => {
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
    return next(createCustomError(`No Task with id: ${taskID}`, 404));
  else res.status(200).json({ updateData });
});

const deleteTask = asyncAwaitWrapper.asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const Id_delete = await TaskModel.findOneAndDelete({ _id: taskId });
  if (!Id_delete)
    return next(createCustomError(`No Task with id: ${taskID}`, 404));
  else res.status(200).json({ Id_delete });
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTasks,
  updateSingletask,
  deleteTask,
};

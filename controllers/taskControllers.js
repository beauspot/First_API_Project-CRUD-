const getAllTasks = (req, res) =>
  res.status(200).send("All Items from the controllers directory found!!!!");

const createTask = (req, res) => {
  res.status(200).json(req.body);
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

const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getSingleTasks,
  updateSingletask,
  deleteTask,
} = require("../controllers/taskControllers");

router.route("/").get(getAllTasks).post(createTask);
router
  .route("/:id")
  .get(getSingleTasks)
  .patch(updateSingletask)
  .delete(deleteTask);

module.exports = router;

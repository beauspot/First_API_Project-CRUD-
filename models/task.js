// Creating a Schema in MongoDb with the aid of mongoose

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    required: [true, "Name is required"],
    trim: true,
    maxlength: [25, "The Name Property cannot be more than 25 characters"],
    type: String,
  },
  completed: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("TaskModel", TaskSchema);

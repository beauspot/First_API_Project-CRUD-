const express = require("express");
const logger = require("morgan");
const connectDB = require("./db/connect");
require("dotenv").config();
const _404_Error_Middleware = require("./middleware/_404Error");
const errMiddlewareHandler = require("./middleware/error_handler");

const TaskRoutes = require("./routes/taskRoutes");

const app = express();

// <====================Middleware =====================>
app.use(logger("dev"));
app.use(express.json());
app.use(express.static("./public"));
// <====================Middleware =====================>

app.get("/", (req, res) => {
  res.status(301).redirect("/api/v1/tasks");
});

app.use("/api/v1/tasks", TaskRoutes);
app.use("*", _404_Error_Middleware.get404Response);
// define error-handling middleware last, after other app.use() and routes calls eg ln 25
app.use(errMiddlewareHandler);

// app.get("/api/v1/tasks")   - get all tasks
// app.post("/api/v1/tasks") - create a new task
// app.get("api/v1/tasks/:id") - get a single task
// app.patch('/api/v1/tasks/:id) - update a single task
// app.delete('/api/v1/tasks/:id) - delete a single task

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(
        `Server connected to the DB & Listening on localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error(error);
  }
};

start();

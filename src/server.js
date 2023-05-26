require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const connectDB = require("./db");
const usersRouter = require("./controllers/UserController");
const tasksRouter = require("./controllers/TaskController");
const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
const port = 3000;

connectDB();
app.use(cors());
app.use(express.json());
app.use(logger(formatsLogger));

app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);

app.use(express.static("public"));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

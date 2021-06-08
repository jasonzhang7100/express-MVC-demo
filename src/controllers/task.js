const Task = require("../models/task");

const addTask = (req, res) => {
  const { description } = req.body;
  const tasks = Task.addTask(description);
  return res.status(200).json(tasks);
};

const getAllTasksOrByQuery = (req, res) => {
  const { description } = req.query;
  const tasks = Task.getAllTasksOrByQuery(description);
  if (tasks.length === 0) {
    return res.status(404).send("No such a description.");
  }
  return res.status(200).json(tasks);
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  const task = Task.getTaskById(id);
  return res.status(200).json(task);
};

const updateTaskById = (req, res) => {
  const { id } = req.params;
  const { description, done } = req.body;
  const task = Task.updateTaskById(id, {
    description,
    done,
  });
  return res.status(200).json(task);
};

const deleteTaskById = (req, res) => {
  const { id } = req.params;
  Task.deleteTaskById(id);
  return res.status(200).send("Delete Successfully.");
};

module.exports = {
  addTask,
  getAllTasksOrByQuery,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};

const { getTaskById } = require("../models/task");

module.exports = (req, res, next) => {
  const { id } = req.params;
  const task = getTaskById(id);
  if (!task) {
    return res
      .status(404)
      .send("No such a task in this ID.");
  }
  next();
};

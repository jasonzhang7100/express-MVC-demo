// [{id: number, description: string, done: boolean}]
const tasks = [];
let id = 1;

// helper function
const getIndexById = id =>
  tasks.findIndex(i => i.id === id);

// Creat
const addTask = description => {
  tasks.push({ id: id++, description, done: false });
  return tasks;
};

// Retrieve
const getTaskById = id => tasks.find(i => i.id === id);

const getAllTasksOrByQuery = description => {
  if (description) {
    return tasks.filter(i =>
      i.description.includes(description)
    );
  }
  return tasks;
};

// Update
const updateTaskById = (id, { description, done }) => {
  const task = getTaskById(id);
  if (description) {
    task.description = description;
  }
  if (done !== undefined) {
    task.done = !!done;
  }
  return task;
};

// Delete
const deleteTaskById = id => {
  const index = getIndexById(id);
  tasks.splice(index, 1);
};

module.exports = {
  addTask,
  getTaskById,
  getAllTasksOrByQuery,
  updateTaskById,
  deleteTaskById,
};

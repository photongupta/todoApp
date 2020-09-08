const TODO = 'todo';
const DOING = 'doing';
const DONE = 'done';

const toggle = {
  [TODO]: DOING,
  [DOING]: DONE,
  [DONE]: TODO,
};

const getNextStatus = (state) => toggle[state];
const getDefaultStatus = () => TODO;

let todoDetails = {todoList: [], title: 'Todo', lastId: 0};

const addTask = (req, res) => {
  todoDetails.todoList.push({
    task: req.body.task,
    id: todoDetails.lastId++,
    status: getDefaultStatus(),
  });
  res.json({todoList: todoDetails.todoList});
};

const removeTask = (req, res) => {
  todoDetails.todoList = todoDetails.todoList.filter(
    (todo) => todo.id !== req.body.id
  );
  res.json({todoList: todoDetails.todoList});
};

const resetTodoDetails = (req, res) => {
  todoDetails = {todoList: [], title: 'Todo', lastId: 0};
  res.json(todoDetails);
};

const updateStatus = (req, res) => {
  const newTodoList = todoDetails.todoList.map((task) => ({...task}));
  const index = newTodoList.findIndex((task) => task.id === req.body.id);
  newTodoList[index].status = getNextStatus(newTodoList[index].status);
  todoDetails.todoList = newTodoList;
  res.json({todoList: newTodoList});
};

const updateTitle = (req, res) => {
  todoDetails.title = req.body.title;
  res.json({title: todoDetails.title});
};

module.exports = {
  addTask,
  removeTask,
  updateTitle,
  updateStatus,
  resetTodoDetails,
};

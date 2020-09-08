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

const getDefaultState = (req, res) => {
  res.json({todoList: [], title: 'Todo', lastId: 0});
};

const addTask = (req, res) => {
  console.log(req.body);
  const {task} = req.body;
  const id = todoDetails.lastId++;
  todoDetails.todoList.push({
    task,
    id,
    status: getDefaultStatus(),
  });
  console.log(todoDetails);
  res.json({id});
};

const removeTask = (req, res) => {
  todoDetails.todoList = todoDetails.todoList.filter(
    (todo) => todo.id !== req.body.id
  );
  console.log(todoDetails);
  res.json({todoList: todoDetails.todoList});
};

const resetTodoDetails = (req, res) => {
  todoDetails = {todoList: [], title: 'Todo', lastId: 0};
  console.log(todoDetails);
  res.json({todoList: todoDetails.todoList, title: todoDetails.title});
};

const updateStatus = (req, res) => {
  const newTodoList = todoDetails.todoList.map((task) => ({...task}));
  const index = newTodoList.findIndex(
    (task) => task.id === Number(req.body.id)
  );
  newTodoList[index].status = getNextStatus(newTodoList[index].status);
  todoDetails.todoList = newTodoList;
  console.log(todoDetails);
  res.json({todoList: newTodoList});
};

const updateTitle = (req, res) => {
  todoDetails.title = req.body.title;
  console.log(todoDetails);
  res.json({title: todoDetails.title});
};

module.exports = {
  getDefaultState,
  addTask,
  removeTask,
  updateTitle,
  updateStatus,
  resetTodoDetails,
};

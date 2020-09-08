const express = require('express');
const app = express();
const {
  getDefaultState,
  addTask,
  removeTask,
  updateTitle,
  updateStatus,
  resetTodoDetails,
} = require('./handler');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public', {index: false}));

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get('/defaultState', getDefaultState);
app.post('/addTask', addTask);
app.post('/removeTask', removeTask);
app.post('/updateStatus', updateStatus);
app.post('/updateTitle', updateTitle);
app.post('/resetTodoDetails', resetTodoDetails);

app.listen(3001, () => console.log('Server is listening...'));

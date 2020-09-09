const getTodoDetails = function () {
  return fetch('api/getTodoDetails')
    .then((res) => res.json())
    .then((details) => JSON.parse(details));
};

const sendPostReq = function (url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  });
};

const addTask = (task) =>
  sendPostReq('api/addTask', {task}).then(getTodoDetails);

const removeTask = (id) =>
  sendPostReq('api/removeTask', {id}).then(getTodoDetails);

const updateStatus = (id) =>
  sendPostReq('api/updateStatus', {id}).then(getTodoDetails);

const updateTitle = (title) =>
  sendPostReq('api/updateTitle', {title}).then(getTodoDetails);

const resetTodoDetails = () =>
  sendPostReq('api/resetTodoDetails').then(getTodoDetails);

module.exports = {
  addTask,
  removeTask,
  updateTitle,
  updateStatus,
  resetTodoDetails,
  getTodoDetails,
};

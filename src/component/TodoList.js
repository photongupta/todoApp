import React, {useState, useEffect} from 'react';
import Tasks from './Tasks';
import TextInput from './TextInput';
import Title from './Title';
import WithDelete from './WithDelete';

const sendPostReq = function (url, body, setTodoList, setTitle) {
  fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({todoList, title}) => {
      todoList && setTodoList(todoList);
      title && setTitle(title);
    });
};

const TitleWithDelete = WithDelete(Title);

const TodoList = function () {
  let [todoList, setTodoList] = useState(null);
  let [title, setTitle] = useState(null);

  const addTask = (task) => sendPostReq('addTask', {task}, setTodoList);

  const removeTask = (id) => sendPostReq('removeTask', {id}, setTodoList);

  const updateStatus = (id) => sendPostReq('updateStatus', {id}, setTodoList);

  const updateTitle = (title) =>
    sendPostReq('updateTitle', {title}, null, setTitle);

  const resetTodoDetails = () =>
    sendPostReq('resetTodoDetails', {}, setTodoList, setTitle);

  useEffect(() => {
    resetTodoDetails();
  }, []);

  if (!todoList) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="todoList">
      <TitleWithDelete
        updateTitle={updateTitle}
        value={title}
        handleDelete={resetTodoDetails}
      />
      <Tasks
        todoList={todoList}
        updateStatus={updateStatus}
        handleDelete={removeTask}
      />
      <TextInput onSubmit={addTask} />
    </div>
  );
};

export default TodoList;

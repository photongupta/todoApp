import React, {useState} from 'react';
import Tasks from './Tasks';
import TextInput from './TextInput';
import Title from './Title';
import WithDelete from './WithDelete';
import {getNextState, getDefaultState} from '../TodoStates';

const DEFAULT_TITLE = 'Todo';
const TitleWithDelete = WithDelete(Title);

const TodoList = function () {
  const [todoList, updateTodoList] = useState([]);
  const [title, updateTitle] = useState(DEFAULT_TITLE);
  const [id, updateId] = useState(0);

  const addTask = function (task) {
    updateTodoList([...todoList, {task, id, status: getDefaultState()}]);
    updateId(id + 1);
  };

  const removeTask = function (taskId) {
    updateTodoList(todoList.filter((task) => task.id !== taskId));
  };

  const updateStatus = function (taskId) {
    updateTodoList(() => {
      const newTodoList = todoList.map((task) => ({...task}));
      const index = newTodoList.findIndex((task) => task.id === taskId);
      newTodoList[index].status = getNextState(newTodoList[index].status);
      return newTodoList;
    });
  };

  const resetTodoInfo = function (taskId) {
    updateTodoList([]);
    updateTitle(DEFAULT_TITLE);
    updateId(0);
  };

  return (
    <div className="todoList">
      <TitleWithDelete
        updateTitle={(title) => updateTitle(title)}
        value={title}
        handleDelete={resetTodoInfo}
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

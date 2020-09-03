import React, {useState} from 'react';
import Tasks from './Tasks';
import TextInput from './TextInput';
import Title from './Title';
import WithDelete from './WithDelete';
import {getNextState, getDefaultState} from '../TodoStates';

const TitleWithDelete = WithDelete(Title);

const TodoList = function (props) {
  const defaultState = {todoList: [], title: 'Todo', lastId: 0};
  let [{todoList, title, lastId}, updateTodoInfo] = useState(defaultState);

  const addTask = function (task) {
    updateTodoInfo({
      todoList: [...todoList, {task, id: lastId++, status: getDefaultState()}],
      lastId,
      title,
    });
  };

  const removeTask = function (taskId) {
    updateTodoInfo({
      todoList: todoList.filter((task) => task.id !== taskId),
      lastId,
      title,
    });
  };

  const updateStatus = function (taskId) {
    updateTodoInfo(() => {
      const newTodoList = todoList.map((task) => ({...task}));
      const index = newTodoList.findIndex((task) => task.id === taskId);
      newTodoList[index].status = getNextState(newTodoList[index].status);
      return {todoList: newTodoList, title, lastId};
    });
  };

  return (
    <div className="todoList">
      <TitleWithDelete
        updateTitle={(title) => updateTodoInfo({todoList, title, lastId})}
        value={title}
        handleDelete={() => updateTodoInfo(defaultState)}
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

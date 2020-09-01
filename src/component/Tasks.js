import React from 'react';
import Todo from './Todo';

const Tasks = function ({todoList, updateStatus}) {
  const tasks = todoList.map(({task, status, id}) => (
    <Todo
      key={id}
      id={id}
      task={task}
      status={status}
      updateStatus={updateStatus}
    />
  ));
  return <div>{tasks}</div>;
};

export default Tasks;

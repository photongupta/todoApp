import React from 'react';
import Task from './Task';

const Tasks = function ({todoList, updateStatus}) {
  const tasks = todoList.map(({task, status, id}) => (
    <Task
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

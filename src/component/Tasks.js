import React from 'react';
import Task from './Task';
import WithDelete from './WithDelete';

const TaskWithDelete = WithDelete(Task);

const Tasks = function ({todoList, updateStatus, handleDelete}) {
  const tasks = todoList.map(({task, status, id}) => (
    <TaskWithDelete
      key={id}
      id={id}
      task={task}
      status={status}
      updateStatus={updateStatus}
      handleDelete={handleDelete}
    />
  ));
  return <div>{tasks}</div>;
};

export default Tasks;

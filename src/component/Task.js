import React from 'react';
import Delete from './Delete';

const Task = function ({task, status, updateStatus, removeTask, id}) {
  return (
    <div className="container">
      <p className={`todoBox ${status}`} onClick={() => updateStatus(id)}>
        {task}
      </p>
      <Delete onClick={removeTask} id={id} />
    </div>
  );
};
export default Task;

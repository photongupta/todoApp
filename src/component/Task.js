import React from 'react';

const Task = function ({task, status, updateStatus, id}) {
  return (
    <p className={`todoBox ${status}`} onClick={() => updateStatus(id)}>
      {task}
    </p>
  );
};
export default Task;

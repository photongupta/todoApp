import React from 'react';

const Task = function ({task, status, updateStatus, removeTask, id}) {
  return (
    <div className="todoContainer">
      <p className={`todoBox ${status}`} onClick={() => updateStatus(id)}>
        {task}
      </p>
      <div className="remove" onClick={() => removeTask(id)}>
        X
      </div>
    </div>
  );
};
export default Task;

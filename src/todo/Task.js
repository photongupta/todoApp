import React from 'react';

const Task = function ({task, hasDone, toggleStatus, id}) {
  return (
    <p
      className={hasDone ? 'Complete' : 'Incomplete'}
      onClick={() => toggleStatus(id)}
    >
      {task}
    </p>
  );
};
export default Task;

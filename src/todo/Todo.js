import React from 'react';

const Todo = function ({task, status, updateStatus, id}) {
  let className = 'Todo Incomplete';
  if (status.isDone) {
    className = 'Todo Complete';
  }
  if (status.isInProgress) {
    className = 'Todo InProgress';
  }

  return (
    <p className={className} onClick={() => updateStatus(id)}>
      {task}
    </p>
  );
};
export default Todo;

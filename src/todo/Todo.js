import React from 'react';

const Todo = function ({task, hasDone, toggleStatus, id}) {
  return (
    <p
      className={hasDone ? 'Complete' : 'Incomplete'}
      onClick={() => toggleStatus(id)}
    >
      {task}
    </p>
  );
};
export default Todo;

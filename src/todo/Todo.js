import React from 'react';

const Todo = function ({task, hasDone, toggleStatus, id}) {
  return (
    <p
      className={hasDone ? 'Todo Complete' : 'Todo Incomplete'}
      onClick={() => toggleStatus(id)}
    >
      {task}
    </p>
  );
};
export default Todo;

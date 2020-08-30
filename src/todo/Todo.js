import React from 'react';

const Todo = function ({task, isDone, toggleStatus, id}) {
  return (
    <p
      className={isDone ? 'Todo Complete' : 'Todo Incomplete'}
      onClick={() => toggleStatus(id)}
    >
      {task}
    </p>
  );
};
export default Todo;

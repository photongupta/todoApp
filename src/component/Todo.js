import React from 'react';

const Todo = function ({task, status, updateStatus, id}) {
  return (
    <p className={`todoBox ${status}`} onClick={() => updateStatus(id)}>
      {task}
    </p>
  );
};
export default Todo;

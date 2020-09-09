import React, {useState, useEffect} from 'react';
import Tasks from './Tasks';
import TextInput from './TextInput';
import Title from './Title';
import WithDelete from './WithDelete';
import todoApi from './todoApi';

const TitleWithDelete = WithDelete(Title);

const TodoList = function () {
  let [todoDetails, setTodoDetails] = useState(null);

  const addTask = (task) => todoApi.addTask(task).then(setTodoDetails);

  const removeTask = (id) => todoApi.removeTask(id).then(setTodoDetails);

  const updateStatus = (id) => todoApi.updateStatus(id).then(setTodoDetails);

  const updateTitle = (title) =>
    todoApi.updateTitle(title).then(setTodoDetails);

  const resetTodoDetails = () =>
    todoApi.resetTodoDetails().then(setTodoDetails);

  useEffect(() => {
    todoApi.getTodoDetails().then(setTodoDetails);
  }, []);

  if (!todoDetails) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="todoList">
      <TitleWithDelete
        updateTitle={updateTitle}
        value={todoDetails.title}
        handleDelete={resetTodoDetails}
      />
      <Tasks
        todoList={todoDetails.todoList}
        updateStatus={updateStatus}
        handleDelete={removeTask}
      />
      <TextInput onSubmit={addTask} />
    </div>
  );
};

export default TodoList;

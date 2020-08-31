import React from 'react';
import Todo from './Todo';
import Input from './Input';

const TODO = 'todo';
const DOING = 'doing';
const DONE = 'done';

const toggle = {
  [TODO]: DOING,
  [DOING]: DONE,
  [DONE]: TODO,
};

const getId = (list) => {
  return list.length ? list[list.length - 1].id + 1 : 1;
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoList: []};
    this.addTodo = this.addTodo.bind(this);
    this.updateTodoStatus = this.updateTodoStatus.bind(this);
  }

  addTodo(task) {
    this.setState((state) => {
      const todoList = state.todoList.slice();
      todoList.push({
        task,
        status: TODO,
        id: getId(this.state.todoList),
      });
      return {todoList};
    });
  }

  updateTodoStatus(todoId) {
    this.setState((state) => {
      const todoList = state.todoList.slice();
      const todoIndex = todoList.findIndex((todo) => todo.id === todoId);
      const todo = Object.assign({}, todoList[todoIndex]);
      todo.status = toggle[todo.status];
      todoList[todoIndex] = todo;
      return {todoList};
    });
  }

  render() {
    const todoComponents = this.state.todoList.map(({task, status, id}) => (
      <Todo
        key={id}
        id={id}
        task={task}
        status={status}
        updateStatus={this.updateTodoStatus}
      />
    ));
    return (
      <div className="TodoList">
        <h1>Todo</h1>
        {todoComponents}
        <Input onSubmit={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;

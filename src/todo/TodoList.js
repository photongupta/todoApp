import React from 'react';
import Todo from './Todo';
import Input from './Input';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoList: []};
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodoStatus = this.toggleTodoStatus.bind(this);
  }

  addTodo(task) {
    this.setState((state) => {
      const todoList = state.todoList.slice();
      todoList.push({task, hasDone: false, id: new Date().getTime()});
      return {todoList};
    });
  }

  toggleTodoStatus(todoId) {
    this.setState((state) => {
      const todoList = state.todoList.slice();
      const todoIndex = todoList.findIndex((todo) => todo.id === todoId);
      const todo = Object.assign({}, todoList[todoIndex]);
      todo.hasDone = !todo.hasDone;
      todoList[todoIndex] = todo;
      return {todoList};
    });
  }

  render() {
    const todoComponents = this.state.todoList.map(({task, hasDone, id}) => (
      <Todo
        key={id}
        id={id}
        task={task}
        hasDone={hasDone}
        toggleStatus={this.toggleTodoStatus}
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

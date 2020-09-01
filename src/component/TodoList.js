import React from 'react';
import Todo from './Todo';
import Input from './Input';

const TODO = 'todo';
const DOING = 'doing';
const DONE = 'done';
const DEFAULT_HEADER = 'Todo';

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
    this.state = {todoList: [], header: DEFAULT_HEADER};
    this.addTodo = this.addTodo.bind(this);
    this.updateTodoStatus = this.updateTodoStatus.bind(this);
    this.updateHeader = this.updateHeader.bind(this);
  }

  updateHeader(header) {
    this.setState(() => ({header}));
  }

  addTodo(task) {
    this.setState((state) => {
      const todoList = state.todoList.slice();
      todoList.push({task, status: TODO, id: getId(this.state.todoList)});
      return {todoList};
    });
  }

  updateTodoStatus(todoId) {
    this.setState((state) => {
      const todoList = state.todoList.slice();
      const todoIndex = todoList.findIndex((todo) => todo.id === todoId);
      const todo = {...todoList[todoIndex]};
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
        <Input
          onSubmit={this.updateHeader}
          className={'todoHeader'}
          value={this.state.header}
        />
        {todoComponents}
        <Input onSubmit={this.addTodo} className={'newTodo'} value={''} />
      </div>
    );
  }
}

export default TodoList;

import React from 'react';
import Todo from './Todo';
import TextInput from './TextInput';

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
    const todoList = this.state.todoList.map((todo) => {
      if (todo.id === todoId) todo.status = toggle[todo.status];
      return todo;
    });
    this.setState(() => ({todoList}));
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
        <TextInput
          onSubmit={this.updateHeader}
          className={'todoHeader'}
          value={this.state.header}
        />
        {todoComponents}
        <TextInput onSubmit={this.addTodo} className={'newTodo'} value={''} />
      </div>
    );
  }
}

export default TodoList;

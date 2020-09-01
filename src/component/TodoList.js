import React from 'react';
import Tasks from './Tasks';
import TextInput from './TextInput';
import Header from './Header';

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
    this.updateStatus = this.updateStatus.bind(this);
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

  updateStatus(todoId) {
    const todoList = this.state.todoList.map((todo) => {
      if (todo.id === todoId) todo.status = toggle[todo.status];
      return todo;
    });
    this.setState(() => ({todoList}));
  }

  render() {
    const {todoList, header} = this.state;
    return (
      <div className="TodoList">
        <Header updateHeader={this.updateHeader} value={header} />
        <Tasks todoList={todoList} updateStatus={this.updateStatus} />
        <TextInput onSubmit={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;

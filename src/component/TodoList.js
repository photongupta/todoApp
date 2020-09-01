import React from 'react';
import Tasks from './Tasks';
import TextInput from './TextInput';
import Title from './Title';
import {getNextState, getDefaultState} from '../TodoStates';

const DEFAULT_TITLE = 'Todo';

const getId = (list) => {
  return list.length ? list[list.length - 1].id + 1 : 1;
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoList: [], title: DEFAULT_TITLE};
    this.addTodo = this.addTodo.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(title) {
    this.setState({title});
  }

  addTodo(task) {
    const id = getId(this.state.todoList);
    this.setState(({todoList}) => ({
      todoList: todoList.concat({task, status: getDefaultState(), id}),
    }));
  }

  updateStatus(todoId) {
    const todoList = this.state.todoList.map((todo) => {
      if (todo.id === todoId) todo.status = getNextState(todo.status);
      return todo;
    });
    this.setState({todoList});
  }

  render() {
    const {todoList, title} = this.state;
    return (
      <div className="TodoList">
        <Title updateTitle={this.updateTitle} value={title} />
        <Tasks todoList={todoList} updateStatus={this.updateStatus} />
        <TextInput onSubmit={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;

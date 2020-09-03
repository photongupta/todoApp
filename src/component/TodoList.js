import React from 'react';
import Tasks from './Tasks';
import TextInput from './TextInput';
import Title from './Title';
import Delete from './Delete';
import {getNextState, getDefaultState} from '../TodoStates';

const DEFAULT_TITLE = 'Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoList: [], title: DEFAULT_TITLE, lastId: 0};
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.resetTodoList = this.resetTodoList.bind(this);
  }

  updateTitle(title) {
    this.setState({title});
  }

  addTask(task) {
    this.setState(({todoList, lastId}) => {
      const id = lastId + 1;
      const status = getDefaultState();
      const newTodoList = todoList.concat({task, id, status});
      return {todoList: newTodoList, lastId: id};
    });
  }

  removeTask(taskId) {
    this.setState((state) => ({
      todoList: state.todoList.filter((task) => task.id !== taskId),
    }));
  }

  updateStatus(taskId) {
    this.setState(({todoList}) => {
      const newTodoList = todoList.map((task) => ({...task}));
      const index = newTodoList.findIndex((task) => task.id === taskId);
      newTodoList[index].status = getNextState(newTodoList[index].status);
      return {todoList: newTodoList};
    });
  }

  resetTodoList() {
    this.setState({todoList: [], title: DEFAULT_TITLE, lastId: 0});
  }

  render() {
    const {todoList, title} = this.state;
    return (
      <div className="todoList">
        <div className="container">
          <Title updateTitle={this.updateTitle} value={title} />
          <Delete onClick={this.resetTodoList} />
        </div>
        <Tasks
          todoList={todoList}
          updateStatus={this.updateStatus}
          removeTask={this.removeTask}
        />
        <TextInput onSubmit={this.addTask} />
      </div>
    );
  }
}

export default TodoList;

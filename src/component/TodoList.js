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
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(title) {
    this.setState({title});
  }

  addTask(task) {
    const id = getId(this.state.todoList);
    this.setState(({todoList}) => ({
      todoList: todoList.concat({task, status: getDefaultState(), id}),
    }));
  }

  removeTask(taskId) {
    this.setState((state) => ({
      todoList: state.todoList.filter((task) => task.id !== taskId),
    }));
  }

  updateStatus(taskId) {
    const todoList = this.state.todoList.map((task) => {
      if (task.id === taskId) task.status = getNextState(task.status);
      return task;
    });
    this.setState({todoList});
  }

  render() {
    const {todoList, title} = this.state;
    return (
      <div className="TodoList">
        <Title updateTitle={this.updateTitle} value={title} />
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

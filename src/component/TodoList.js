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
    this.setState(({todoList}) => {
      const id = getId(todoList);
      return {todoList: todoList.concat({task, id, status: getDefaultState()})};
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

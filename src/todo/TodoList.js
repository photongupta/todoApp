import React from 'react';
import Task from './Task';
import Input from './Input';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoList: []};
    this.addTask = this.addTask.bind(this);
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
  }

  addTask(task) {
    this.setState((state) => {
      const todoList = state.todoList.slice();
      todoList.push({task, hasDone: false});
      return {todoList};
    });
  }

  toggleTaskStatus(taskId) {
    this.setState((state) => {
      const todoList = state.todoList.map((todo) => Object.assign({}, todo));
      todoList[taskId].hasDone = !todoList[taskId].hasDone;
      return {todoList};
    });
  }

  render() {
    const tasks = this.state.todoList.map(({task, hasDone}, index) => (
      <Task
        key={index}
        id={index}
        task={task}
        hasDone={hasDone}
        toggleStatus={this.toggleTaskStatus}
      />
    ));
    return (
      <div>
        {tasks}
        <Input onSubmit={this.addTask} />
      </div>
    );
  }
}

export default TodoList;

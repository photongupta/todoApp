import React from 'react';
// import Item from './Item';
import Input from './Input';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoList: []};
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState((state) => {
      const todoList = state.todoList.slice();
      todoList.push({item, hasDone: false});
      return {todoList};
    });
  }
  render() {
    console.log(this.state.todoList);
    return (
      <div>
        <Input onSubmit={this.addItem} />
      </div>
    );
  }
}

export default TodoList;

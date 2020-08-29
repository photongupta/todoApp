import React from 'react';
import Item from './Item';
import Input from './Input';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoList: []};
    this.addItem = this.addItem.bind(this);
    this.toggleItemStatus = this.toggleItemStatus.bind(this);
  }

  addItem(item) {
    this.setState((state) => {
      const todoList = state.todoList.slice();
      todoList.push({item, hasDone: false});
      return {todoList};
    });
  }

  toggleItemStatus(itemId) {
    this.setState((state) => {
      const todoList = state.todoList.map((todo) => Object.assign({}, todo));
      todoList[itemId].hasDone = !todoList[itemId].hasDone;
      return {todoList};
    });
  }

  render() {
    const items = this.state.todoList.map(({item, hasDone}, index) => (
      <Item
        key={index}
        id={index}
        item={item}
        hasDone={hasDone}
        toggleStatus={this.toggleItemStatus}
      />
    ));
    return (
      <div>
        {items}
        <Input onSubmit={this.addItem} />
      </div>
    );
  }
}

export default TodoList;

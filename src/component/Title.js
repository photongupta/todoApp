import React from 'react';
import TextInput from './TextInput';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditable: false};
    this.toggleEditingStatus = this.toggleEditingStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  toggleEditingStatus() {
    this.setState((state) => ({isEditable: !state.isEditable}));
  }

  updateTitle(title) {
    this.toggleEditingStatus();
    this.props.updateTitle(title);
  }

  render() {
    const title = (
      <p className="title" onClick={this.toggleEditingStatus}>
        {this.props.value}
      </p>
    );
    const inputBox = (
      <TextInput onSubmit={this.updateTitle} value={this.props.value} />
    );
    return <div>{this.state.isEditable ? inputBox : title}</div>;
  }
}

export default Title;

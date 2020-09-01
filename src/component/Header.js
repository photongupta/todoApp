import React from 'react';
import TextInput from './TextInput';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditable: false};
    this.toggleEditingStatus = this.toggleEditingStatus.bind(this);
    this.updateHeader = this.updateHeader.bind(this);
  }

  toggleEditingStatus() {
    this.setState((state) => ({isEditable: !state.isEditable}));
  }

  updateHeader(title) {
    this.toggleEditingStatus();
    this.props.updateHeader(title);
  }

  render() {
    const header = (
      <p className={'header'} onClick={this.toggleEditingStatus}>
        {this.props.value}
      </p>
    );
    const inputBox = (
      <TextInput onSubmit={this.updateHeader} value={this.props.value} />
    );
    return <div>{this.state.isEditable ? inputBox : header}</div>;
  }
}

export default Header;

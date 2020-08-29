import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({target}) {
    this.setState({value: target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value) {
      this.props.onSubmit(this.state.value);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            autoFocus
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Add your todo here..."
          />
        </form>
      </div>
    );
  }
}

export default Input;

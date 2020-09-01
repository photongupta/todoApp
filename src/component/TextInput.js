import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: null};
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
      this.setState({value: null});
    }
  }

  render() {
    console.log(this.state.value);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={
              this.state.value === null ? this.props.value : this.state.value
            }
            onChange={this.handleChange}
            className={this.props.className}
          />
        </form>
      </div>
    );
  }
}

export default TextInput;

import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value};
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
    const value = this.state.value;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={value} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

TextInput.defaultProps = {value: ''};

export default TextInput;

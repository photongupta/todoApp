import React, {useState} from 'react';

const TextInput = function (props) {
  const [value, setValue] = useState(props.value);

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (value) {
      props.onSubmit(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
};

TextInput.defaultProps = {value: ''};

export default TextInput;

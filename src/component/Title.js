import React, {useState} from 'react';
import TextInput from './TextInput';

const Title = function (props) {
  const [isEditable, toggleEditable] = useState(false);

  const updateTitle = function (title) {
    toggleEditable(!isEditable);
    props.updateTitle(title);
  };

  const title = (
    <p className="title" onClick={() => toggleEditable(!isEditable)}>
      {props.value}
    </p>
  );
  const inputBox = <TextInput onSubmit={updateTitle} value={props.value} />;
  return isEditable ? inputBox : title;
};

export default Title;

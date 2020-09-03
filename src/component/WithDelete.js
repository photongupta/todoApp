import React from 'react';

const WithDelete = function (Component) {
  return function (props) {
    return (
      <div className="container">
        <Component {...props} />
        <div className="remove" onClick={() => props.handleDelete(props.id)}>
          X
        </div>
      </div>
    );
  };
};

export default WithDelete;

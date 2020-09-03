import React from 'react';

const Delete = function ({id, onClick}) {
  return (
    <div className="remove" onClick={() => onClick(id)}>
      X
    </div>
  );
};

export default Delete;

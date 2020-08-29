import React from 'react';

const Item = function ({item, hasDone, toggleStatus, id}) {
  return (
    <p
      className={hasDone ? 'Complete' : 'Incomplete'}
      onClick={() => toggleStatus(id)}
    >
      {item}
    </p>
  );
};
export default Item;

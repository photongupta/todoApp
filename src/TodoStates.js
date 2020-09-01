const TODO = 'todo';
const DOING = 'doing';
const DONE = 'done';

const toggle = {
  [TODO]: DOING,
  [DOING]: DONE,
  [DONE]: TODO,
};

const getNextState = (state) => toggle[state];
const getDefaultState = () => TODO;

export {getDefaultState, getNextState};

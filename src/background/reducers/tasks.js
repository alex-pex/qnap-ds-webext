import { createReducer } from '@acemarke/redux-starter-kit';

const initialState = {
  data: [],
  error: 0,
  status: {
    active: 0,
    all: 0,
    bt: 0,
    completed: 0,
    down_rate: 0,
    downloading: 0,
    inactive: 0,
    paused: 0,
    seeding: 0,
    stopped: 0,
    up_rate: 0,
    url: 0,
  },
  total: 0,
};

function receiveTasks(state, { payload }) {
  // Updates the state immutably without relying on immer
  return payload;
}

const tasksReducer = createReducer(initialState, {
  RECEIVE_TASKS: receiveTasks,
});

export default tasksReducer;

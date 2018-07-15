import { createReducer } from '@acemarke/redux-starter-kit';
import { addTask } from '../client';

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
  return payload || state;
}

function addUserLink(state, { payload }) {
  addTask({ url: payload.linkUrl, move: 'Téléchargements' });
}

const tasksReducer = createReducer(initialState, {
  RECEIVE_TASKS: receiveTasks,
  ADD_USER_LINK: addUserLink,
});

export default tasksReducer;

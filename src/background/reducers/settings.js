import { createReducer } from '@acemarke/redux-starter-kit';
import makeClient from '../client';

const initialState = {
  domain: 'http://192.168.0.20:8080',
  user: 'admin',
  pass: btoa('ali+pex'),
};

function addUserLink(state, { payload }) {
  const client = makeClient(state);
  client.addTask({ url: payload.linkUrl, move: 'Téléchargements' });
}

const tasksReducer = createReducer(initialState, {
  ADD_USER_LINK: addUserLink,
});

export default tasksReducer;

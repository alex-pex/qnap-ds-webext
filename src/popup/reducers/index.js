import { createReducer } from '@acemarke/redux-starter-kit';

function addLink(state, action) {
  const { newLink } = action.payload;

  // Can safely call state.push() here
  state.push(newLink);
}

const links = createReducer([], {
  ADD_LINK: addLink
});

export default {
  links
}

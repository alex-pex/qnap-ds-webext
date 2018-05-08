import { createReducer } from '@acemarke/redux-starter-kit';

function addLink(state, action) {
  const { linkUrl } = action.payload;

  // Can safely call state.push() here
  state.push(linkUrl);
}

const links = createReducer([], {
  ADD_LINK: addLink,
});

export default {
  links,
};

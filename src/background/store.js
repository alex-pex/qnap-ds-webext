import { configureStore } from '@acemarke/redux-starter-kit';
import { createBackgroundStore } from 'redux-webext';
import rootReducer from './reducers';

const preloadedState = {
  links: ['https://www.google.fr'],
};

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  preloadedState,
});

export default createBackgroundStore({ store });

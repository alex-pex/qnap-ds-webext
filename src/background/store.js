import { wrapStore } from 'react-chrome-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import pkg from '../../package.json';
import reducers from './reducers';

const preloadedState = {
  links: ['https://www.google.fr'],
};

const middleware = [thunk, logger];
const composeEnhancers = composeWithDevTools({ name: pkg.name });

const store = createStore(
  combineReducers(reducers),
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware))
);

wrapStore(store, {
  portName: pkg.name,
});

export default store;

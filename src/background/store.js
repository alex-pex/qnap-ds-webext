import { wrapStore } from 'react-chrome-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import pkg from '../../package.json';
import reducers from './reducers';

const preloadedState = {
  links: ['https://www.google.fr'],
};

const middleware = [thunk, logger];

const store = createStore(
  combineReducers(reducers),
  preloadedState,
  applyMiddleware(...middleware)
);

wrapStore(store, {
  portName: pkg.name,
});

export default store;

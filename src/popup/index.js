import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@acemarke/redux-starter-kit'
import App from './components/App';

import rootReducer from './reducers'

const preloadedState = {
  links: [
    "https://www.google.fr"
  ]
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState
})

const PopupApp = () => <Provider store={store}><App /></Provider>

ReactDOM.render(<PopupApp />, document.getElementById('root'));

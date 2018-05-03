import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@acemarke/redux-starter-kit';
import App from './components/App';

import rootReducer from './reducers';

const preloadedState = {
  links: [
    'https://www.google.fr',
  ],
};

const store = configureStore({
  reducer: rootReducer,
  devTools: false,
  preloadedState,
});

/* if (typeof chrome !== 'undefined') {
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello")  sendResponse({farewell: "goodbye"});
      store.dispatch({type: 'ADD_LINK', payload: {linkUrl: 'hhh'} })
    });
} */

const PopupApp = () => <Provider store={store}><App /></Provider>;

ReactDOM.render(<PopupApp />, document.getElementById('root'));
